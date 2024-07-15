package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Restaurant;
import com.pratham.service.RestaurantService;
import com.pratham.service.UserService;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

  @Autowired
  private RestaurantService restaurantService;

  @Autowired
  private UserService userService;

  public ResponseEntity<Restaurant> createRestaurant() {

  }
}
