package com.bookhaven.api.repositories;

import com.bookhaven.api.domain.Book;
import com.bookhaven.api.domain.UserBookDetails;
import com.bookhaven.api.exceptions.BhBadRequestException;
import com.bookhaven.api.exceptions.BhResourceNotFoundException;

import java.util.List;

public interface BookRepository {

    List<Book> findAll(String title, Long startYear, Long endYear, String genre) throws BhResourceNotFoundException;

    Book findById(Integer bookId) throws BhResourceNotFoundException;

    Integer create(String title, String subtitle, String authors, String genre,
                   String description, Long publishedYear, String imageUrl)
            throws BhBadRequestException;

    void update(Integer bookId, Book book) throws BhBadRequestException;

    List<UserBookDetails> findAllUserLibraryBooks(Integer userId);
    UserBookDetails findUserLibraryBookById(Integer userId, Integer bookId) throws BhResourceNotFoundException;
    void addBookToUserLibrary(Integer userId, Integer bookId) throws BhBadRequestException;
    void updateBookDetailsInUserLibrary(Integer userId, Integer bookId, Boolean hasRead, Boolean bookmarked) throws BhBadRequestException;
    void removeBookFromUserLibrary(Integer userId, Integer bookId);
}
