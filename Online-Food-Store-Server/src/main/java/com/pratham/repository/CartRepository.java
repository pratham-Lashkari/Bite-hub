package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pratham.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {

  public Cart findByCustomerId(String userId);

}
