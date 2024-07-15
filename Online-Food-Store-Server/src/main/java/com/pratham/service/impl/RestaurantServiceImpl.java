package com.pratham.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.Dto.RestaurantDto;
import com.pratham.model.Address;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.repository.AddressRepository;
import com.pratham.repository.RestaurantRepository;
import com.pratham.request.CreateRestaurantRequest;
import com.pratham.service.RestaurantService;
import com.pratham.service.UserService;

@Service
public class RestaurantServiceImpl implements RestaurantService {

  @Autowired
  private RestaurantRepository restaurantRepository;

  @Autowired
  private AddressRepository addressRepository;

  @Autowired
  private UserService userService;

  @Override
  public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {

    Address address = addressRepository.save(req.getAddress());

    Restaurant restaurant = new Restaurant();
    restaurant.setAddress(address);
    restaurant.setContactInformation(req.getContactInformation());
    restaurant.setCuisineType(req.getCuisineType());
    restaurant.setDescription(req.getDescription());
    restaurant.setImages(req.getImages());
    restaurant.setName(req.getName());
    restaurant.setOpeningHours(req.getOpningHours());
    restaurant.setRegistrationDate(LocalDateTime.now());
    restaurant.setOwnerId(user.getId());

    return restaurantRepository.save(restaurant);
  }

  @Override
  public Restaurant updateRestaurant(String restaurantId, CreateRestaurantRequest updateRestaurant) throws Exception {

    Restaurant restaurant = findRestaurantById(restaurantId);

    if (updateRestaurant.getCuisineType() != null) {
      restaurant.setCuisineType(updateRestaurant.getCuisineType());
    }
    if (updateRestaurant.getDescription() != null) {
      restaurant.setDescription(updateRestaurant.getDescription());
    }
    if (updateRestaurant.getName() != null) {
      restaurant.setName(updateRestaurant.getName());
    }
    return restaurantRepository.save(restaurant);
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
