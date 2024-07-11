package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.configuration.JwtProvider;
import com.pratham.repository.UserRepository;
import com.pratham.service.CustomUserDetailSerivce;

@RestController
@RequestMapping("/auth")
public class AtuhController {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JwtProvider jwtProvider;

  @Autowired
  private CustomUserDetailSerivce customUserDetailSerivce;

}
