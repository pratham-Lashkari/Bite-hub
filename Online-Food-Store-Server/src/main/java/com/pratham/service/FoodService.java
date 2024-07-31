package com.pratham.service;

import java.util.List;

import com.pratham.model.Category;
import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.request.CreateFoodRequest;
import com.pratham.response.FoodReponse;

public interface FoodService {

  public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

  void deleteFood(String foodId) throws Exception;

  public List<FoodReponse> getRestaurantFood(String restaurantId, boolean isVegitarain, boolean isSeasonal,
      String foodCategory, boolean isNonveg);

  public List<Food> searchFood(String keyword);

  public Food findFoodById(String foodId) throws Exception;

  public Food updateAvailibilityStatus(String foodId) throws Exception;
}
