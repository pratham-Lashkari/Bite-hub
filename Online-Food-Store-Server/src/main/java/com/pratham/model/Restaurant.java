package com.pratham.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Restaurant")
public class Restaurant {

  private String id;
  private String OwnerId;
  private String name;
  private String cuisineType;
  private String description;
  private Address address;
  private ContactInformation contactInformation;
  private String openingHours;
  private List<String> orders = new ArrayList<>();
}
