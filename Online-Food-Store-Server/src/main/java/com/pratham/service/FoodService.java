package com.pratham.service;

import java.util.List;

import com.pratham.model.Category;
import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.request.CreateFoodRequest;

public interface FoodService {

  public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

  void deleteFood(String foodId) throws Exception;

  public List<Food> getRestaurantFood(String restaurantId, boolean isVegitarain, boolean isSeasonal);
}
