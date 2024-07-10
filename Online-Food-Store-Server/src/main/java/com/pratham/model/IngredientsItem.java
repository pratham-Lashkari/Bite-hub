package com.pratham.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientsItem {
  private String id;
  private String name;
  private String ingredientCategoryId;
  private String restaurant;
  private boolean inStoke = true;
}
