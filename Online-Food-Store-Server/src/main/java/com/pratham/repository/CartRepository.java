package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.Cart;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {

  public Cart findByCustomerId(String customerId);

}
