package com.pratham.service;

import java.util.List;

import com.pratham.model.IngredientCategoryModel;
import com.pratham.model.IngredientsItem;

public interface IngredientCategory {

  public IngredientCategoryModel createIngredientCategory(String name, String restaurantId) throws Exception;

  public IngredientCategoryModel findIngredientCategoryById(String id) throws Exception;

  public List<IngredientCategoryModel> findIngredientCategoryByRestaurantId(String id) throws Exception;

  public IngredientsItem createIngredientItem(String restaurantId, String ingredientName, String categoryId)
      throws Exception;

  public List<IngredientsItem> findRestaurantIngredientes(String restaurantId);

  public IngredientsItem updateStock(String id) throws Exception;
}
