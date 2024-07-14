package com.pratham.service;

import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.request.CreateRestaurantRequest;

public interface RestaurantService {

  public Restaurant createRestaurant(CreateRestaurantRequest req, User user);
}
