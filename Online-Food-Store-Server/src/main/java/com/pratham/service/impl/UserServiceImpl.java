package com.pratham.service.impl;

import org.springframework.stereotype.Service;

import com.pratham.model.User;
import com.pratham.service.UserService;

@Service
public class UserServiceImpl implements UserService {

  @Override
  public User findUserByJwtToken(String jwt) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'findUserByJwtToken'");
  }

  @Override
  public User findUserByEmail(String email) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'findUserByEmail'");
  }

}
