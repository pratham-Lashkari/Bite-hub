package com.pratham.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pratham.model.Category;
import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.request.CreateFoodRequest;
import com.pratham.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService {

  @Override
  public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
    return null;
  }

  @Override
  public void deleteFood(String foodId) throws Exception {
    return;

  }

  @Override
  public List<Food> getRestaurantFood(String restaurantId, boolean isVegitarain, boolean isSeasonal,
      String foodCategory, boolean isNonveg) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getRestaurantFood'");
  }

  @Override
  public List<Food> searchFood(String keyword) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'searchFood'");
  }

  @Override
  public Food findFoodById(String foodId) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'findFoodById'");
  }

  @Override
  public Food updateAvailibilityStatus(String foodId) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateAvailibilityStatus'");
  }

}
