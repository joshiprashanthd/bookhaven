package com.bookhaven.api.services;

import com.bookhaven.api.domain.User;
import com.bookhaven.api.exceptions.BhAuthException;

public interface UserService {
    User validateUser(String email, String password) throws BhAuthException;
    User registerUser(String firstName, String lastName, String email, String password) throws BhAuthException;
}