package com.pratham.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.IngredientsItem;

@Repository
public interface IngredientItemRepository extends MongoRepository<IngredientsItem, String> {

  List<IngredientsItem> findByRestaurantId(String id);
}
