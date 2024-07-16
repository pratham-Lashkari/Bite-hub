package com.pratham.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.Dto.RestaurantDto;
import com.pratham.model.Address;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.repository.AddressRepository;
import com.pratham.repository.RestaurantRepository;
import com.pratham.repository.UserRepository;
import com.pratham.request.CreateRestaurantRequest;
import com.pratham.service.RestaurantService;

@Service
public class RestaurantServiceImpl implements RestaurantService {

  @Autowired
  private RestaurantRepository restaurantRepository;

  @Autowired
  private AddressRepository addressRepository;

  @Autowired
  private UserRepository userRepository;

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
    Restaurant restaurant = findRestaurantById(restaurantId);
    restaurantRepository.delete(restaurant);
  }

  @Override
  public List<Restaurant> getAllRestaurant() {
    return restaurantRepository.findAll();
  }

  @Override
  public List<Restaurant> searchRestaurant(String query) {
    return restaurantRepository.findBySearchQuery(query);
  }

  @Override
  public Restaurant findRestaurantById(String restaurantId) throws Exception {
    Optional<Restaurant> opt = restaurantRepository.findById(restaurantId);
    if (opt.isEmpty()) {
      throw new Exception("Restaurant not found");
    }
    return opt.get();
  }

  @Override
  public Restaurant getRestaurantByUserId(String userId) throws Exception {
    Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
    if (restaurant == null) {
      throw new Exception("Restauant not found ");
    }
    return restaurant;
  }

  @Override
  public RestaurantDto addToFavourites(String restaurantId, User user) throws Exception {
    Restaurant restaurant = findRestaurantById(restaurantId);
    RestaurantDto dto = new RestaurantDto();
    dto.setDescription(restaurant.getDescription());
    dto.setImages(restaurant.getImages());
    dto.setTitle(restaurant.getName());
    dto.setId(restaurant.getId());

    if (user.getFavourites().contains(dto)) {
      user.getFavourites().remove(dto);
    } else {
      user.getFavourites().add(dto);
    }
    userRepository.save(user);
    return dto;
  }

  @Override
  public Restaurant updateRestaurantStatus(String id) throws Exception {
    Restaurant restaurant = findRestaurantById(id);
    restaurant.setOpen(!restaurant.isOpen());
    return restaurantRepository.save(restaurant);
  }

}
