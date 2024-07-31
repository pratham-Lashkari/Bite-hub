package com.pratham.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.Category;
import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.repository.FoodRepository;
import com.pratham.repository.RestaurantRepository;
import com.pratham.request.CreateFoodRequest;
import com.pratham.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService {

  @Autowired
  private FoodRepository foodRepository;

  @Autowired
  private RestaurantRepository restaurantRepository;

  @Override
  public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {

    Food food = new Food();
    food.setFoodCategory(category);
    food.setRestaurantId(restaurant.getId());
    food.setDescription(req.getDescription());
    food.setImages(req.getImages());
    food.setName(req.getName());
    food.setPrice(req.getPrice());
    food.setIngredients(req.getIngredientsItem());
    food.setSeasonal(req.isSessional());
    food.setAvailable(true);

    Food savedFood = foodRepository.save(food);
    restaurant.getFoods().add(food.getId());
    restaurantRepository.save(restaurant);
    return savedFood;
  }

  @Override
  public void deleteFood(String foodId) throws Exception {
    Food food = findFoodById(foodId);
    food.setRestaurantId("");
    foodRepository.save(food);
  }

  @Override
  public List<Food> getRestaurantFood(String restaurantId, boolean isVegitarain, boolean isSeasonal,
      String foodCategory, boolean isNonveg) {
    List<Food> foods = foodRepository.findByRestaurantId(restaurantId);

    if (isVegitarain) {
      foods = filterFoodByVegetarian(foods, isVegitarain);
    }
    if (isNonveg) {
      foods = filterFoodByIsNonVeg(foods);
    }
    if (isSeasonal) {
      foods = filterFoodByIsSeasonal(foods, isSeasonal);
    }
    if (foodCategory != null) {
      foods = filterByFoodCategory(foodCategory, foods);
    }

    return foods;
  }

  private List<Food> filterByFoodCategory(String foodCategory, List<Food> foods) {
    return foods.stream().filter(food -> {
      if (food.getFoodCategory() != null) {
        return food.getFoodCategory().getName().equals(foodCategory);
      }
      return false;
    }).collect(Collectors.toList());
  }

  private List<Food> filterFoodByIsSeasonal(List<Food> foods, boolean isSeasonal) {
    return foods.stream().filter(food -> food.isSeasonal() == isSeasonal).collect(Collectors.toList());
  }

  private List<Food> filterFoodByIsNonVeg(List<Food> foods) {
    return foods.stream().filter(food -> food.isVegetarian() == false).collect(Collectors.toList());
  }

  private List<Food> filterFoodByVegetarian(List<Food> foods, boolean isVegitarain) {
    return foods.stream().filter(food -> food.isVegetarian() == isVegitarain).collect(Collectors.toList());
  }

  @Override
  public List<Food> searchFood(String keyword) {
    return foodRepository.searchFood(keyword);
  }

  @Override
  public Food findFoodById(String foodId) throws Exception {
    Optional<Food> optionalFood = foodRepository.findById(foodId);
    if (optionalFood.isEmpty()) {
      throw new Exception("Food not exist...");
    }
    return optionalFood.get();
  }

  @Override
  public Food updateAvailibilityStatus(String foodId) throws Exception {
    Food food = findFoodById(foodId);
    food.setAvailable(!food.isAvailable());
    return foodRepository.save(food);
  }

}
