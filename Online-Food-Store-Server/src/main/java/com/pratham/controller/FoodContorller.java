package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

  public ResponseEntity<> createFood() {

  }
}
