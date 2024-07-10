package com.pratham.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Food {

  private String id;

  private String name;
  private String description;
  private Long price;
  private Category foodCategory;
  private List<String> images;
  private boolean available;
  private Restaurant restaurant;
}
