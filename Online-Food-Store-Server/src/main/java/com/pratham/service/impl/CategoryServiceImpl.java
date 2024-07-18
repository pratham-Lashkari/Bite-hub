package com.pratham.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.Category;
import com.pratham.model.Restaurant;
import com.pratham.repository.CategoryRepository;
import com.pratham.service.CategorySerivce;
import com.pratham.service.RestaurantService;

@Service
public class CategoryServiceImpl implements CategorySerivce {

  @Autowired
  private RestaurantService restaurantService;
  @Autowired
  private CategoryRepository categoryRepository;

  @Override
  public Category createcCategory(String name, String userId) throws Exception {
    Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
    Category category = new Category();
    category.setName(name);
    category.setRestaurantId(restaurant.getId());
    return categoryRepository.save(category);
  }

  @Override
  public List<Category> findCategoryRestaurantId(String id) throws Exception {
    Restaurant restaurant = restaurantService.getRestaurantByUserId(id);
    return categoryRepository.findByRestaurantId(restaurant.getId());
  }

  @Override
  public Category findCategoryById(String id) throws Exception {
    Optional<Category> optionalCategroy = categoryRepository.findById(id);
    if (optionalCategroy.isEmpty()) {
      throw new Exception("Category not found");
    }
    return optionalCategroy.get();
  }

}
