package com.pratham.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "User")
public class Cart {

  @Id
  private String id;
  private String cusotmerId;
  private Long total;
  private List<CartItem> cartItems = new ArrayList<>();

}