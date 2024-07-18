package com.pratham.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.IngredientCategoryModel;
import com.pratham.model.IngredientsItem;
import com.pratham.repository.IngredientCategroyRepository;
import com.pratham.repository.IngredientItemRepository;
import com.pratham.service.IngredientCategory;
import com.pratham.service.RestaurantService;

@Service
public class IngredientServiceImpl implements IngredientCategory {

  @Autowired
  private IngredientCategroyRepository ingredientCategroyRepository;

  @Autowired
  private IngredientItemRepository ingredientItemRepository;

  @Autowired
  private RestaurantService restaurantService;

  @Override
  public IngredientCategoryModel createIngredientCategory(String name, String restaurantId) throws Exception {
    IngredientCategoryModel category = new IngredientCategoryModel();
    category.setName(name);
    category.setRestaurantId(restaurantId);
    return ingredientCategroyRepository.save(category);
  }

  @Override
  public IngredientCategoryModel findIngredientCategoryById(String id) throws Exception {
    Optional<IngredientCategoryModel> opt = ingredientCategroyRepository.findById(id);
    if (opt.isEmpty()) {
      throw new Exception("ingredient not found");
    }
    return opt.get();
  }

  @Override
  public List<IngredientCategoryModel> findIngredientCategoryByRestaurantId(String id) throws Exception {
    restaurantService.findRestaurantById(id);
    return ingredientCategroyRepository.findByRestaurantId(id);
  }

  @Override
  public IngredientsItem createIngredientItem(String restaurantId, String ingredientName, String categoryId)
      throws Exception {
    IngredientCategoryModel categoryModel = findIngredientCategoryById(categoryId);
    return null;
  }

  @Override
  public List<IngredientsItem> findRestaurantIngredientes(String restaurantId) {
    return null;

  }

  @Override
  public IngredientsItem updateStock(String id) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateStock'");
  }

}
