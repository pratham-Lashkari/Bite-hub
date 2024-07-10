package com.pratham.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientCategory {

  private String id;
  private String name;
  private String restaurantId;
  private List<String> ingredientsItem = new ArrayList<>();
}
