package com.pratham.request;

import java.util.List;

import com.pratham.model.Category;

import lombok.Data;

@Data
public class CreateFoodRequest {

  private String name;
  private String description;
  private Long price;

  private Category categoryId;
  private List<String> images;
  private String restaurantId;
  private boolean vegetarin;
  private boolean sessional;
  private List<String> ingredientsItem;
}
