package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.OrderItem;

@Repository
public interface OrderItemRepository extends MongoRepository<OrderItem, String> {

}
