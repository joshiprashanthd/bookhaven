package com.bookhaven.api.services;

import com.bookhaven.api.domain.Book;
import com.bookhaven.api.domain.UserBookDetails;
import com.bookhaven.api.exceptions.BhBadRequestException;
import com.bookhaven.api.exceptions.BhResourceNotFoundException;

import java.util.List;

public interface BookService {

    List<Book> fetchAllBooks();
    Book fetchBookById(Integer bookId) throws BhResourceNotFoundException;
    Book addBook(String title, String subtitle, String authors, String genre, String description, String publishedYear, String imageUrl) throws BhBadRequestException;
    void updateBook(Integer bookId, Book book) throws BhBadRequestException;
    List<UserBookDetails> fetchUserLibrary(Integer userId);
    UserBookDetails addBookToUserLibrary(Integer userId, Integer bookId) throws BhBadRequestException;
    void updateBookDetailsInUserLibrary(Integer userId, Integer bookId, Boolean hasRead, Boolean bookmarked) throws BhBadRequestException;
    void deleteBookFromUserLibrary(Integer userId, Integer bookId);
}
