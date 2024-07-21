package com.pratham.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
  public List<Order> findByUserId(String userId);

  public List<Order> findByRestaurantId(String restaurantId);
}
