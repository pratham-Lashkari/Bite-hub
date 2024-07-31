package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Food;
import com.pratham.model.Restaurant;
import com.pratham.request.CreateFoodRequest;
import com.pratham.response.MessageResponse;
import com.pratham.service.FoodService;
import com.pratham.service.RestaurantService;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodContorller {

  @Autowired
  private FoodService foodService;

  @Autowired
  private RestaurantService restaurantService;

  @PostMapping("/create")
  public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {

    Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
    Food food = foodService.createFood(req, req.getCategory(), restaurant);
    return new ResponseEntity<>(food, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<MessageResponse> deleteFood(@PathVariable String id) throws Exception {
    foodService.deleteFood(id);
    MessageResponse msg = new MessageResponse();
    msg.setMessage("Food deleted successfully");
    return new ResponseEntity<>(msg, HttpStatus.OK);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Food> updateFoodStatus(@PathVariable String id) throws Exception {
    Food food = foodService.updateAvailibilityStatus(id);
    return new ResponseEntity<>(food, HttpStatus.OK);
  }
}
