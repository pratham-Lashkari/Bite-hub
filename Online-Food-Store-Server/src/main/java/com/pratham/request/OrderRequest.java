package com.pratham.request;

import com.pratham.model.Address;

import lombok.Data;

@Data
public class OrderRequest {

  private String restaurantId;
  private Address address;
}
