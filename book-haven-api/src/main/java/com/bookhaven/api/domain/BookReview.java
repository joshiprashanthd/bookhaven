package com.bookhaven.api.domain;

public class BookReview {
    private Long bookReviewId;
    private Integer bookId;
    private Integer userId;
    private Double rating;
    private String reviewText;

    public BookReview(Long bookReviewId, Integer bookId, Integer userId, Double rating, String reviewText) {
        this.bookReviewId = bookReviewId;
        this.bookId = bookId;
        this.userId = userId;
        this.rating = rating;
        this.reviewText = reviewText;
    }

    public Long getBookReviewId() {
        return bookReviewId;
    }

    public void setBookReviewId(Long bookReviewId) {
        this.bookReviewId = bookReviewId;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }
}
