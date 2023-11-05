package com.bookhaven.api.services;

import com.bookhaven.api.domain.Book;
import com.bookhaven.api.domain.UserBookDetails;
import com.bookhaven.api.exceptions.BhBadRequestException;
import com.bookhaven.api.exceptions.BhResourceNotFoundException;
import com.bookhaven.api.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> fetchAllBooks(String title, String startYear, String endYear, String genre) {
        return bookRepository.findAll(title, startYear, endYear, genre);
    }

    @Override
    public Book fetchBookById(Integer bookId) throws BhResourceNotFoundException {
        return bookRepository.findById(bookId);
    }

    @Override
    public Book addBook(String title, String subtitle, String authors, String genre, String description, String publishedYear, String imageUrl) throws BhBadRequestException {
        int bookId = bookRepository.create(title, subtitle, authors, genre, description, publishedYear, imageUrl);
        return bookRepository.findById(bookId);
    }

    @Override
    public void updateBook(Integer bookId, Book book) throws BhBadRequestException {
        bookRepository.update(bookId, book);
    }

    @Override
    public List<UserBookDetails> fetchUserLibrary(Integer userId) {
        return bookRepository.findAllUserLibraryBooks(userId);
    }

    @Override
    public UserBookDetails addBookToUserLibrary(Integer userId, Integer bookId) throws BhBadRequestException {
        bookRepository.addBookToUserLibrary(userId, bookId);
        return bookRepository.findUserLibraryBookById(userId, bookId);
    }

    @Override
    public void updateBookDetailsInUserLibrary(Integer userId, Integer bookId, Boolean hasRead, Boolean bookmarked) throws BhBadRequestException {
        bookRepository.updateBookDetailsInUserLibrary(userId, bookId, hasRead, bookmarked);
    }

    @Override
    public void deleteBookFromUserLibrary(Integer userId, Integer bookId) {
        bookRepository.removeBookFromUserLibrary(userId, bookId);
    }
}
