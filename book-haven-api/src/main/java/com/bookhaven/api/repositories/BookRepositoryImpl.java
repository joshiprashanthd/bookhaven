package com.bookhaven.api.repositories;

import com.bookhaven.api.domain.Book;
import com.bookhaven.api.domain.UserBookDetails;
import com.bookhaven.api.exceptions.BhBadRequestException;
import com.bookhaven.api.exceptions.BhResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Repository
public class BookRepositoryImpl implements BookRepository{

    private static final String SQL_FIND_ALL = "SELECT BOOK_ID, TITLE, SUBTITLE, GENRE, AUTHORS, DESCRIPTION, PUBLISHED_YEAR, IMAGE_URL" +
            " FROM BH_BOOKS";
    private static final String SQL_FIND_BY_ID = "SELECT BOOK_ID, TITLE, SUBTITLE, GENRE, AUTHORS, DESCRIPTION, PUBLISHED_YEAR, IMAGE_URL" +
            " FROM BH_BOOKS WHERE BOOK_ID = ?";
    private static final String SQL_CREATE = "INSERT INTO BH_BOOKS (BOOK_ID, TITLE, SUBTITLE, AUTHORS, GENRE, DESCRIPTION, PUBLISHED_YEAR," +
            "IMAGE_URL) VALUES(NEXTVAL('BH_BOOKS_SEQ'), ?, ?, ?, ?, ?, ?, ?)";

    private static final String SQL_UPDATE = "UPDATE BH_BOOKS SET TITLE = ?, SUBTITLE = ?, AUTHORS = ?, GENRE = ?, DESCRIPTION = ?, PUBLISHED_YEAR = ?" +
            ", IMAGE_URL = ? WHERE BOOK_ID = ?";

    private static final String SQL_BOOK_LIBRARY_ADD = "INSERT INTO BH_USER_LIBRARIES (USER_LIBRARY_ID, USER_ID, BOOK_ID, HAS_READ, BOOKMARKED) " +
            "VALUES(NEXTVAL('BH_USER_LIBRARIES_SEQ'), ?, ?, ?, ?)";

    private static final String SQL_FIND_ALL_USER_LIBRARY_BOOKS = "SELECT BOOK_ID, HAS_READ, BOOKMARKED FROM BH_USER_LIBRARIES WHERE USER_ID = ?";

    private static final String SQL_USER_LIBRARY_BOOK_FIND_BY_ID = "SELECT BOOK_ID, HAS_READ, BOOKMARKED FROM BH_USER_LIBRARIES WHERE USER_ID = ? AND BOOK_ID = ?";

    private static final String SQL_UPDATE_USER_LIBRARY_BOOK_DETAIL = "UPDATE BH_USER_LIBRARIES SET HAS_READ = ?, BOOKMARKED = ? WHERE USER_ID = ? AND BOOK_ID = ?";

    private static final String SQL_DELETE_USER_LIBRARY_BOOK = "DELETE FROM BH_USER_LIBRARIES WHERE USER_ID = ? AND BOOK_ID = ?";

    final
    JdbcTemplate jdbcTemplate;

    public BookRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Book> findAll(String title, String startYear, String endYear, String genre) throws BhResourceNotFoundException {
        List<String> conditions = new ArrayList<>();
        List<Object> params = new ArrayList<>();
        if(title != null){
            conditions.add("TITLE ILIKE ?");
            params.add("%" + title + "%");
        }
        if(genre != null) {
            conditions.add("GENRE ILIKE ?");
            params.add("%" + genre + "%");
        }
        if(startYear != null){
            conditions.add("PUBLISHED_YEAR >= ?");
            params.add(startYear);
        }
        if(endYear != null){
            conditions.add("PUBLISHED_YEAR <= ?");
            params.add(endYear);
        }
        String modifiedSQL = SQL_FIND_ALL;
        if(!conditions.isEmpty()) {
            modifiedSQL = SQL_FIND_ALL + " WHERE " + String.join(" AND ", conditions);
        }

        return jdbcTemplate.query(modifiedSQL, bookRowMapper, params.toArray());
    }

    @Override
    public Book findById(Integer bookId) throws BhResourceNotFoundException {
        try{
            return jdbcTemplate.queryForObject(SQL_FIND_BY_ID, new Object[]{bookId}, bookRowMapper);
        }catch (Exception e){
            throw new BhResourceNotFoundException("Book not found");
        }
    }

    @Override
    public Integer create(String title, String subtitle, String authors, String genre, String description, String publishedYear, String imageUrl) throws BhBadRequestException {
        try {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            jdbcTemplate.update(connection -> {
                PreparedStatement ps = connection.prepareStatement(SQL_CREATE, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, title);
                ps.setString(2, subtitle);
                ps.setString(3, authors);
                ps.setString(4, genre);
                ps.setString(5, description);
                ps.setString(6, publishedYear);
                ps.setString(7, imageUrl);
                return ps;
            }, keyHolder);
            return (Integer) keyHolder.getKeys().get("BOOK_ID");
        }catch (Exception e){
            throw new BhBadRequestException("Invalid request");
        }
    }

    @Override
    public void update(Integer bookId, Book book) throws BhBadRequestException {
        try{
            jdbcTemplate.update(SQL_UPDATE, new Object[]{book.getTitle(), book.getSubtitle(), book.getAuthors(), book.getGenre(), book.getDescription(), book.getPublishedYear(), book.getImageUrl(), bookId});
        }catch (Exception e){
            throw new BhBadRequestException("Invalid request");
        }
    }

    @Override
    public List<UserBookDetails> findAllUserLibraryBooks(Integer userId) {
        return jdbcTemplate.query(SQL_FIND_ALL_USER_LIBRARY_BOOKS, new Object[]{userId}, userLibraryBookDetailsRowMapper);
    }

    @Override
    public UserBookDetails findUserLibraryBookById(Integer userId, Integer bookId) throws BhResourceNotFoundException {
        try{
            return jdbcTemplate.queryForObject(SQL_USER_LIBRARY_BOOK_FIND_BY_ID, new Object[]{userId, bookId}, userLibraryBookDetailsRowMapper);
        }catch (Exception e){
            throw new BhResourceNotFoundException("Book not found in Library");
        }
    }

    @Override
    public void addBookToUserLibrary(Integer userId, Integer bookId) throws BhBadRequestException {
        try {
            KeyHolder keyHolder = new GeneratedKeyHolder();
            jdbcTemplate.update(connection -> {
                PreparedStatement ps = connection.prepareStatement(SQL_BOOK_LIBRARY_ADD, Statement.RETURN_GENERATED_KEYS);
                ps.setInt(1, userId);
                ps.setInt(2, bookId);
                ps.setBoolean(3, false);
                ps.setBoolean(4, false);
                return ps;
            }, keyHolder);
        }catch (Exception e){
            throw new BhBadRequestException("Invalid request");
        }
    }

    @Override
    public void updateBookDetailsInUserLibrary(Integer userId, Integer bookId, Boolean hasRead, Boolean bookmarked) throws BhBadRequestException {
        try{
            jdbcTemplate.update(SQL_UPDATE_USER_LIBRARY_BOOK_DETAIL, new Object[]{hasRead, bookmarked, userId, bookId});
        }catch (Exception e){
            throw new BhBadRequestException("Invalid request");
        }
    }

    @Override
    public void removeBookFromUserLibrary(Integer userId, Integer bookId) {
        jdbcTemplate.update(SQL_DELETE_USER_LIBRARY_BOOK, new Object[]{userId, bookId});
    }

    private RowMapper<Book> bookRowMapper = ((rs, rowNum) -> {
        return new Book(
                rs.getInt("BOOK_ID"),
                rs.getString("TITLE"),
                rs.getString("SUBTITLE"),
                rs.getString("GENRE"),
                rs.getString("AUTHORS"),
                rs.getString("DESCRIPTION"),
                rs.getString("PUBLISHED_YEAR"),
                rs.getString("IMAGE_URL"));
    });

    private RowMapper<UserBookDetails> userLibraryBookDetailsRowMapper = ((rs, rowNum) -> {
        return new UserBookDetails(
                findById(rs.getInt("BOOK_ID")),
                rs.getBoolean("HAS_READ"),
                rs.getBoolean("BOOKMARKED"));
    });
}
