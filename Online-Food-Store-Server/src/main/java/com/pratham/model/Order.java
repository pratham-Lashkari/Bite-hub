package com.pratham.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Order")
public class Order {

  @Id
  private String id;
  private String userId;
  private String restaurantId;
  private String totalAmount;
  private String orderStatus;
  private Date createdAt;
  private String deliveryAddressId;
  private List<String> orderItemId = new ArrayList<>();
  // private Payment payment;
  private int totalItem;
  private Long totalPrice;
}
