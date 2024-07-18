package com.pratham.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.Category;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {

  List<Category> findByRestaurantId(String id);
}
