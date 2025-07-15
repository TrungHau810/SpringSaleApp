package com.tthau.services;

import com.tthau.pojo.User;
import java.util.Map;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Trung Hau
 */
public interface UserService {

    User getUserByUsername(String username);

    User addUser(Map<String, String> params, MultipartFile avatar);
}
