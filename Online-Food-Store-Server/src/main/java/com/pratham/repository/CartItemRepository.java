package com.pratham.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.CartItem;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String> {
  List<CartItem> findByCartId(String cartId);

}