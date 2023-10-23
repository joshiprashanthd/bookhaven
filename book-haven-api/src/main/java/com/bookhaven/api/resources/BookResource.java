package com.bookhaven.api.resources;

import com.bookhaven.api.domain.Book;
import com.bookhaven.api.services.BookService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/books")
public class BookResource {

    private final BookService bookService;

    public BookResource(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("")
    public ResponseEntity<List<Book>> getAllBooks(HttpServletRequest request){
        List<Book> books = bookService.fetchAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/{bookId}")
    public ResponseEntity<Book> getBookById(@PathVariable("bookId") Integer bookId){
        Book book = bookService.fetchBookById(bookId);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Book> addBook(@RequestBody Map<String, Object> bookMap){
        String title = (String) bookMap.get("title");
        String subtitle = null;
        if (bookMap.containsKey("subtitle")){
            subtitle = (String) bookMap.get("subtitle");
        }
        String authors = (String) bookMap.get("authors");
        String genre = (String) bookMap.get("genre");
        String description = (String) bookMap.get("description");
        String publishedYear = (String) bookMap.get("publishedYear");
        String imageUrl = (String) bookMap.get("imageUrl");
        Book book = bookService.addBook(title, subtitle, authors, genre, description, publishedYear, imageUrl);
        return new ResponseEntity<>(book, HttpStatus.CREATED);
    }

    @PutMapping("/{bookId}")
    public ResponseEntity<Map<String, Boolean>> updateBook(@PathVariable("bookId") Integer bookId,
                                                               @RequestBody Book book) {
        bookService.updateBook(bookId, book);
        Map<String, Boolean> map = new HashMap<>();
        map.put("success", true);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }


}
