package com.pratham.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Order")
public class Order {

  @Id
  private String id;
  private String userId;
  private String restaurantId;
  private String totalAmount;
  private String orderStatus;
  private Date createdAt;
  private String deliveryAddress;
}
