package com.pratham.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Food")
public class Food {

  @Id
  private String id;

  private String name;
  private String description;
  private Long price;
  private Category foodCategory;
  private List<String> images;
  private boolean available;
  private Restaurant restaurant;
  private boolean isSeasonal;
  private boolean isVegetarian;
  private List<String> ingredients = new ArrayList<>();
  private Date createdAt;
}
