package com.pratham.request;

import java.util.List;

import lombok.Data;

@Data
public class AddCartItemRequest {

  private String foodId;
  private int quantity;
  private Long totalPrice;
  private List<String> ingredients;
}
