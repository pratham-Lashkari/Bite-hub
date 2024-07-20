package com.pratham.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "CartItem")

public class CartItem {

  @Id
  private String id;
  private String cartId;
  private String foodId;
  private int quantity;
  private int totalPrice;
  private List<String> ingredients;

}
