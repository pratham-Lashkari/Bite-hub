package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

  public User findByEmail(String email);
}
