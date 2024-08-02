package com.pratham.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartResponse {
  private String id;
  private String customerId;
  private Long total;
  private List<CartItemResponse> cartItems;
  private List<String> ingredients;
}
