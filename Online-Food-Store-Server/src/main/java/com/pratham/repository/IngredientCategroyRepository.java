package com.pratham.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pratham.model.IngredientCategory;

@Repository
public interface IngredientCategroyRepository extends MongoRepository<IngredientCategory, String> {

}
