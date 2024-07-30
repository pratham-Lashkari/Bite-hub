package com.pratham.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.pratham.model.Restaurant;

public interface RestaurantRepository extends MongoRepository<Restaurant, String> {

  Optional<Restaurant> findByOwnerId(String ownerId);

  @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
  List<Restaurant> findBySearchQuery(String query);
}
