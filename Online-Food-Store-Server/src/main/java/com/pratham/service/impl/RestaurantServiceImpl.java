package com.pratham.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pratham.Dto.RestaurantDto;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.request.CreateRestaurantRequest;
import com.pratham.service.RestaurantService;

@Service
public class RestaurantServiceImpl implements RestaurantService {

  @Override
  public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
    throw new UnsupportedOperationException("Unimplemented method 'createRestaurant'");
  }

  @Override
  public Restaurant updateRestaurant(String restaurantId, CreateRestaurantRequest updateRestaurant) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'updateRestaurant'");
  }

  @Override
  public void deleteRestaurant(String restaurantId) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'deleteRestaurant'");
  }

  @Override
  public List<Restaurant> getAllRestaurant() {
    throw new UnsupportedOperationException("Unimplemented method 'getAllRestaurant'");
  }

  @Override
  public List<Restaurant> searchRestaurant() {
    throw new UnsupportedOperationException("Unimplemented method 'searchRestaurant'");
  }

  @Override
  public Restaurant findRestaurantById(String restaurantId) {
    throw new UnsupportedOperationException("Unimplemented method 'findRestaurantById'");
  }

  @Override
  public Restaurant getRestaurantByUserId(String userId) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'getRestaurantByUserId'");
  }

  @Override
  public RestaurantDto addToFavourites(String restaurantId, User user) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'addToFavourites'");
  }

  @Override
  public Restaurant updateRestaurant(String id) throws Exception {
    throw new UnsupportedOperationException("Unimplemented method 'updateRestaurant'");
  }

}
