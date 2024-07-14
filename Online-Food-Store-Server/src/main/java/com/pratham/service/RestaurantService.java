package com.pratham.service;

import java.util.List;

import com.pratham.Dto.RestaurantDto;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.request.CreateRestaurantRequest;

public interface RestaurantService {

  public Restaurant createRestaurant(CreateRestaurantRequest req, User user);

  public Restaurant updateRestaurant(String restaurantId, CreateRestaurantRequest updateRestaurant) throws Exception;

  public void deleteRestaurant(String restaurantId) throws Exception;

  public List<Restaurant> getAllRestaurant();

  public List<Restaurant> searchRestaurant();

  public Restaurant findRestaurantById(String restaurantId);

  public Restaurant getRestaurantByUserId(String userId) throws Exception;

  public RestaurantDto addToFavourites(String restaurantId, User user) throws Exception;

  public Restaurant updateRestaurant(String id) throws Exception;
}
