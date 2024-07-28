package com.pratham.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pratham.Dto.RestaurantDto;
import com.pratham.enums.USER_ROLE;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "User")
public class User {

  @Id
  private String id;
  private String fullName;
  private String email;

  @JsonProperty(value = "password")
  private String password;
  private USER_ROLE role;

  private List<String> orders = new ArrayList<>();

  private List<RestaurantDto> favourites = new ArrayList<>();

  private List<String> addresses = new ArrayList<>();
}
