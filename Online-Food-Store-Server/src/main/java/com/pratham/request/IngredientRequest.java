package com.pratham.request;

import lombok.Data;

@Data
public class IngredientRequest {

  private String name;
  private String categoryId;
  private String restaurantId;
}
