package com.pratham.request;

import com.pratham.model.Address;
import com.pratham.model.ContactInformation;

import lombok.Data;

@Data
public class CreateRestaurantRequest {

  private String id;
  private String name;
  private String cuisineType;
  private String description;
  private Address address;
  private ContactInformation contactInformation;
  private String opningHours;
  private List<String> images;
}
