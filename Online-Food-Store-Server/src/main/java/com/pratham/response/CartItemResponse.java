package com.pratham.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItemResponse {
  private String id;
  private String name;
  private List<String> images;
  private int quantity;
  private String restaurantId;
  private Long totalPrice;
}
