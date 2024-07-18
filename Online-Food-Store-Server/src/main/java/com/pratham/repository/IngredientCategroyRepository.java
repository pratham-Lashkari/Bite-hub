package com.pratham.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.IngredientCategoryModel;

@Repository
public interface IngredientCategroyRepository extends MongoRepository<IngredientCategoryModel, String> {

  List<IngredientCategoryModel> findByRestaurantId(String resutaurantId);
}
