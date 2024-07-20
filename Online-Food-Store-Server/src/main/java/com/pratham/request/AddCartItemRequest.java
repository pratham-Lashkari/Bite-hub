package com.pratham.request;

import java.util.List;

import lombok.Data;

@Data
public class AddCartItemRequest {

  private String foodId;
  private int quantity;
  private int totalPrice;
  private List<String> ingredients;
}
