package com.pratham.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pratham.model.Food;

@Repository
public interface FoodRepository extends MongoRepository<Food, String> {

  List<Food> findByRestaurantId(String restaurantId);

  @Query("{ $or: [ { 'name': { $regex: :#{#keyword}, $options: 'i' } }, { 'foodCategory.name': { $regex: :#{#keyword}, $options: 'i' } } ] }")
  List<Food> searchFood(@Param("keyword") String keyword);
}
