package com.pratham.Dto;

import java.util.List;

import lombok.Data;

@Data
public class RestaurantDto {

  private String id;
  private String title;
  private List<String> description;
}
