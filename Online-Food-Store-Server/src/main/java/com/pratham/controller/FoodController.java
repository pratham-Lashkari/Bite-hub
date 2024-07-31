package com.pratham.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Food;
import com.pratham.response.FoodReponse;
import com.pratham.service.FoodService;

@RestController
@RequestMapping("/api/food")
public class FoodController {

  @Autowired
  private FoodService foodService;

  @GetMapping("/search")
  public ResponseEntity<List<Food>> searchFood(@RequestParam String name) throws Exception {

    List<Food> foods = foodService.searchFood(name);
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }

  @GetMapping("/restaurant/{restaurantId}")
  public ResponseEntity<List<FoodReponse>> getRestaurantFood(
      @RequestParam(required = false) boolean vegetarian,
      @RequestParam(required = false) boolean seasonal,
      @RequestParam(required = false) boolean nonveg,
      @RequestParam(required = false) String food_category,
      @PathVariable String restaurantId) throws Exception {

    List<FoodReponse> foods = foodService.getRestaurantFood(restaurantId, vegetarian, seasonal, food_category, nonveg);
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }
}
