package com.pratham.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.configuration.JwtProvider;
import com.pratham.model.User;
import com.pratham.repository.UserRepository;
import com.pratham.service.UserService;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;
  @Autowired
  private JwtProvider jwtProvider;

  @Override
  public User findUserByJwtToken(String jwt) throws Exception {
    return null;
  }

  @Override
  public User findUserByEmail(String email) throws Exception {

    User user = userRepository.findByEmail(email);
    if (user == null) {
      throw new Exception("User not found");
    }
    return user;
  }

}
