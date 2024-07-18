package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.IngredientsItem;

@Repository
public interface IngredientItemRepository extends MongoRepository<IngredientsItem, String> {

}
