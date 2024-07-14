package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pratham.model.Restaurant;

public interface RestaurantService extends MongoRepository<Restaurant, String> {

  Restaurant findByOwnerId(String ownerId);
}
