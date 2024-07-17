package com.pratham.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.Category;
import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.repository.FoodRepository;
import com.pratham.request.CreateFoodRequest;
import com.pratham.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService {

  @Autowired
  private FoodRepository foodRepository;

  @Override
  public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
    Food food = new Food();
    food.setFoodCategory(category);
    food.setRestaurant(restaurant.getId());
    food.setDescription(req.getDescription());
    food.setImages(req.getImages());
    food.setName(req.getName());
    food.setPrice(req.getPrice());
    food.setIngredients(req.getIngredientsItem());
    food.setSeasonal(req.isSessional());

    Food savedFood = foodRepository.save(food);
    return savedFood;
  }

  @Override
  public void deleteFood(String foodId) throws Exception {
    return;

  }

  @Override
  public List<Food> getRestaurantFood(String restaurantId, boolean isVegitarain, boolean isSeasonal,
      String foodCategory, boolean isNonveg) {
    throw new UnsupportedOperationException("Unimplemented method 'getRestaurantFood'");
  }

  @Override
  public List<Food> searchFood(String keyword) {
    throw new UnsupportedOperationException("Unimplemented method 'searchFood'");
  }

  @Override
  public Food findFoodById(String foodId) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'findFoodById'");
  }

  @Override
  public Food updateAvailibilityStatus(String foodId) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'updateAvailibilityStatus'");
  }

}
