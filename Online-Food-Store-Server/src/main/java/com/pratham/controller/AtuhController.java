package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.configuration.JwtProvider;
import com.pratham.model.Cart;
import com.pratham.model.User;
import com.pratham.repository.CartRepository;
import com.pratham.repository.UserRepository;
import com.pratham.response.AuthResponse;
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

  @Autowired
  private CartRepository cartRepository;

  @PostMapping("/signup")
  public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {
    User isUserExist = userRepository.findByEmail(user.getEmail());
    if (isUserExist != null) {
      throw new Exception("Email already is exists");
    }
    User createUser = new User();
    createUser.setEmail(user.getEmail());
    createUser.setFullName(user.getFullName());
    createUser.setRole(user.getRole());
    createUser.setPassword(passwordEncoder.encode(user.getPassword()));
    User savedUser = userRepository.save(createUser);

    Cart cart = new Cart();
    cart.setCusotmerId(savedUser.getId());
    cartRepository.save(cart);

    Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(),
        savedUser.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String jwt = jwtProvider.generateToken(authentication);
    AuthResponse authResponse = new AuthResponse();
    authResponse.setToken(jwt);
    authResponse.setRole(savedUser.getRole());
    authResponse.setMessage("User created Successfully");
    return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
  }

  public ResponseEntity<AuthResponse> login() throws Exception {

  }

}
