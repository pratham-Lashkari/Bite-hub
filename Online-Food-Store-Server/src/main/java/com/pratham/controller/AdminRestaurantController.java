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

import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.request.CreateRestaurantRequest;
import com.pratham.response.MessageResponse;
import com.pratham.service.RestaurantService;
import com.pratham.service.UserService;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

  @Autowired
  private RestaurantService restaurantService;

  @Autowired
  private UserService userService;

  @PostMapping("/create")
  public ResponseEntity<Restaurant> createRestaurant(@RequestBody CreateRestaurantRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {

    User user = userService.findUserByJwtToken(jwt);
    Restaurant restaurant = restaurantService.createRestaurant(req, user);

    return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Restaurant> updateRestaurant(@RequestBody CreateRestaurantRequest req, @PathVariable String id)
      throws Exception {

    Restaurant restaurant = restaurantService.updateRestaurant(id, req);

    return new ResponseEntity<>(restaurant, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<MessageResponse> deleteRestaurant(@PathVariable String id)
      throws Exception {

    restaurantService.deleteRestaurant(id);
    MessageResponse msg = new MessageResponse();
    msg.setMessage("Restaurant deleted successfully");

    return new ResponseEntity<>(msg, HttpStatus.OK);
  }

}
