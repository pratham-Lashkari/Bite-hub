package com.pratham.service;

import java.util.List;

import com.pratham.model.Order;
import com.pratham.model.User;
import com.pratham.request.OrderRequest;

public interface OrderService {

  public Order createOrder(OrderRequest order, User user) throws Exception;

  public Order updateOrder(String orderId, String orderStatus) throws Exception;

  public void cancelOrder(String orderId) throws Exception;

  public List<Order> getUserOrder(String userId) throws Exception;

  public List<Order> getRestaurantsOrder(String restaurantId, String orderStatus) throws Exception;

  public Order findOrderById(String orderId) throws Exception;
}
