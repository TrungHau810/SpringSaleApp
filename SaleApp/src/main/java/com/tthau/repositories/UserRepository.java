package com.tthau.repositories;

import com.tthau.pojo.User;

/**
 *
 * @author Trung Hau
 */
public interface UserRepository {

    User getUserByUsername(String username);

    User addUser(User u);
}
