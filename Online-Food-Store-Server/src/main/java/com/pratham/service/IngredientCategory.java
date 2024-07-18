package com.pratham.service;

import java.util.List;

import com.pratham.model.IngredientsItem;

public interface IngredientCategory {

  public IngredientCategory createIngredientCategory(String name, String restaurantId) throws Exception;

  public IngredientCategory findIngredientCategoryById(String id) throws Exception;

  public List<IngredientCategory> findIngredientCategoryByRestaurantId(String id) throws Exception;

  public IngredientsItem createIngredientItem(String restaurantId, String ingredientName, String categoryId)
      throws Exception;

  public List<IngredientsItem> findRestaurantIngredientes(String restaurantId);
}
