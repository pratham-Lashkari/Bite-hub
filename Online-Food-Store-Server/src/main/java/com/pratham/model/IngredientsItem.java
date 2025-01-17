package com.pratham.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "IngredientsItem")
public class IngredientsItem {
  @Id
  private String id;
  private String name;
  private String ingredientCategoryId;
  private String restaurantId;
  private boolean inStoke = true;
}
