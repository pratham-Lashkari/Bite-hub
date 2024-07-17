package com.pratham.request;

import java.util.List;

import lombok.Data;

@Data
public class CreateFoorRequest {

  private String name;
  private String description;
  private Long price;

  private String categoryId;
  private List<String> images;
  private String restaurantId;
  private boolean vegetarin;
  private boolean sessional;
  private List<String> ingredientsItem;
}
