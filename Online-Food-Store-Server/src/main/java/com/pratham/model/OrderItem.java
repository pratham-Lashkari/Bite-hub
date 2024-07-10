package com.pratham.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "OrderItems")
public class OrderItem {

  private String id;
  private Food food;
  private int quantity;
  private Long totalPrice;
  private List<String> ingredients;
}
