package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pratham.model.User;

public interface UserRepository extends MongoRepository<User, String> {

  public User findByEmail(String email);
}
