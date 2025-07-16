package com.tthau.services;

import com.tthau.pojo.User;
import java.util.Map;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Trung Hau
 */
public interface UserService extends  UserDetailsService{

    User getUserByUsername(String username);

    User addUser(Map<String, String> params, MultipartFile avatar);
}
