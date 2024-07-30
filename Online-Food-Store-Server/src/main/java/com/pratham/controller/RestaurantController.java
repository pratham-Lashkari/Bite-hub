package com.pratham.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.Dto.RestaurantDto;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.service.RestaurantService;
import com.pratham.service.UserService;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {

  @Autowired
  private RestaurantService restaurantService;

  @Autowired
  private UserService userService;

  @GetMapping("/search")
  public ResponseEntity<List<Restaurant>> searchRestaurant(@RequestParam String keyword) throws Exception {
    List<Restaurant> restaurants = restaurantService.searchRestaurant(keyword);
    return new ResponseEntity<>(restaurants, HttpStatus.OK);
  }

  @GetMapping("/all")
  public ResponseEntity<List<Restaurant>> getAllRestaurant() throws Exception {
    List<Restaurant> restaurants = restaurantService.getAllRestaurant();
    return new ResponseEntity<>(restaurants, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Restaurant> findRestaurantById(@PathVariable String id) throws Exception {
    Restaurant restaurant = restaurantService.findRestaurantById(id);
    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }

  @PutMapping("/{id}/add-favourites")
  public ResponseEntity<RestaurantDto> addToFavourites(@PathVariable String id,
      @RequestHeader("Authorization") String jwt)
      throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    RestaurantDto restaurant = restaurantService.addToFavourites(id, user);
    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }

}
