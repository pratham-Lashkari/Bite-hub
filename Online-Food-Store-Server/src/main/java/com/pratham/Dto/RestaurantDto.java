package com.pratham.Dto;

import java.util.List;

import lombok.Data;

@Data
public class RestaurantDto {

  private String Id;
  private String title;
  private List<String> description;
}
