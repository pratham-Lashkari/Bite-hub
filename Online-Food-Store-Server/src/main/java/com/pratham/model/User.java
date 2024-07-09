package com.pratham.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.pratham.Dto.RestaurantDto;
import com.pratham.enums.USER_ROLE;

import lombok.Data;

@Data
@Document(collection = "User")
public class User {

  @Id
  private String Id;
  private String fullName;
  private String email;
  private String password;
  private USER_ROLE role;

  private List<Order> orders = new ArrayList<>();

  private List<RestaurantDto> favourites = new ArrayList<>();

  private List<Address> addresses = new ArrayList<>();
}
