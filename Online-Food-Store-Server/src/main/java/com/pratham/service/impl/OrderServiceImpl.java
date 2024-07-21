package com.pratham.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.Address;
import com.pratham.model.Order;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.repository.AddressRepository;
import com.pratham.repository.OrderItemRepository;
import com.pratham.repository.OrderRepository;
import com.pratham.repository.UserRepository;
import com.pratham.request.OrderRequest;
import com.pratham.service.OrderService;
import com.pratham.service.RestaurantService;

@Service
public class OrderServiceImpl implements OrderService {

  @Autowired
  private OrderRepository orderRepository;

  @Autowired
  private OrderItemRepository orderItemRepository;

  @Autowired
  private AddressRepository addressRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RestaurantService restaurantService;

  @Override
  public Order createOrder(OrderRequest order, User user) throws Exception {
    Address address = order.getAddress();
    Address saveAddress = addressRepository.save(address);
    if (!user.getAddresses().contains(saveAddress.getId())) {
      user.getAddresses().add(saveAddress.getId());
      userRepository.save(user);
    }
    Restaurant restaurant = restaurantService.findRestaurantById(order.getRestaurantId());
    Order creatOrder = new Order();
    creatOrder.setUserId(user.getId());
    creatOrder.setCreatedAt(new Date());
    creatOrder.setDeliveryAddressId(saveAddress.getId());
    creatOrder.setOrderStatus("PENDING");
    creatOrder.setRestaurantId(restaurant.getId());

    return null;
  }

  @Override
  public Order updateOrder(String orderId, String orderStatus) throws Exception {

    throw new UnsupportedOperationException("Unimplemented method 'updateOrder'");
  }

  @Override
  public void cancelOrder(String orderId) throws Exception {

    throw new UnsupportedOperationException("Unimplemented method 'cancelOrder'");
  }

  @Override
  public List<Order> getUserOrder(String userId) throws Exception {

    throw new UnsupportedOperationException("Unimplemented method 'getUserOrder'");
  }

  @Override
  public List<Order> getRestaurantsOrder(String restaurantId, String orderStatus) throws Exception {

    throw new UnsupportedOperationException("Unimplemented method 'getRestaurantsOrder'");
  }

}
