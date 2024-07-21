package com.pratham.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pratham.model.Order;
import com.pratham.model.User;
import com.pratham.request.OrderRequest;
import com.pratham.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

  @Override
  public Order createOrder(OrderRequest order, User user) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'createOrder'");
  }

  @Override
  public Order updateOrder(String orderId, String orderStatus) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateOrder'");
  }

  @Override
  public void cancelOrder(String orderId) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'cancelOrder'");
  }

  @Override
  public List<Order> getUserOrder(String userId) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getUserOrder'");
  }

  @Override
  public List<Order> getRestaurantsOrder(String restaurantId, String orderStatus) throws Exception {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getRestaurantsOrder'");
  }

}
