package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.request.CreateFoodRequest;
import com.pratham.service.FoodService;
import com.pratham.service.RestaurantService;
import com.pratham.service.UserService;

@RestController
@RequestMapping("/api/admin/food")
public class FoodContorller {

  @Autowired
  private FoodService foodService;

  @Autowired
  private UserService userService;

  @Autowired
  private RestaurantService restaurantService;

  public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {

    // User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
    Food food = foodService.createFood(req, req.getCategoryId(), restaurant);
    return new ResponseEntity<>(food, HttpStatus.CREATED);
  }
}
