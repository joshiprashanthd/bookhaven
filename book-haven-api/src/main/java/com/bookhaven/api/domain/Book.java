package com.bookhaven.api.domain;

import java.util.List;

public class Book {
    private Integer bookId;
    private String title;
    private String subtitle;
    private String genre;
    private String authors;
    private String description;
    private String publishedYear;
    private String imageUrl;

    public Book(Integer bookId, String title, String subtitle, String genre, String authors, String description, String publishedYear, String imageUrl) {
        this.bookId = bookId;
        this.title = title;
        this.subtitle = subtitle;
        this.genre = genre;
        this.authors = authors;
        this.description = description;
        this.publishedYear = publishedYear;
        this.imageUrl = imageUrl;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getAuthors() {
        return authors;
    }

    public void setAuthors(String authors) {
        this.authors = authors;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPublishedYear() {
        return publishedYear;
    }

    public void setPublishedYear(String publishedYear) {
        this.publishedYear = publishedYear;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
