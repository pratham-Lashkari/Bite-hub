package com.pratham.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.Address;
import com.pratham.model.Cart;
import com.pratham.model.CartItem;
import com.pratham.model.Order;
import com.pratham.model.OrderItem;
import com.pratham.model.Restaurant;
import com.pratham.model.User;
import com.pratham.repository.AddressRepository;
import com.pratham.repository.OrderItemRepository;
import com.pratham.repository.OrderRepository;
import com.pratham.repository.RestaurantRepository;
import com.pratham.repository.UserRepository;
import com.pratham.request.OrderRequest;
import com.pratham.service.CartService;
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

  @Autowired
  private CartService cartService;

  @Autowired
  private RestaurantRepository restaurantRepository;

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

    Cart cart = cartService.findCartByUserId(user.getId());
    List<String> orderItems = new ArrayList<>();

    for (CartItem cartItem : cart.getCartItems()) {
      OrderItem orderItem = new OrderItem();
      orderItem.setFoodId(cartItem.getFoodId());
      orderItem.setIngredients(cartItem.getIngredients());
      orderItem.setQuantity(cartItem.getQuantity());
      orderItem.setTotalPrice(cartItem.getTotalPrice());
      OrderItem savedOrderItem = orderItemRepository.save(orderItem);
      orderItems.add(savedOrderItem.getId());
    }

    Long totalPrice = cartService.calculateCartTotals(cart);
    creatOrder.setOrderItemId(orderItems);
    creatOrder.setTotalPrice(totalPrice);
    Order saveOrder = orderRepository.save(creatOrder);
    restaurant.getOrders().add(saveOrder.getId());
    restaurantRepository.save(restaurant);

    return saveOrder;
  }

  @Override
  public Order updateOrder(String orderId, String orderStatus) throws Exception {

    Order order = findOrderById(orderId);
    if (orderStatus.equals("OUT_FOR_DELIVERY") || orderStatus.equals("DELIVERED") || orderStatus.equals("COMPLETED")
        || orderStatus.equals("PENDING")) {
      order.setOrderStatus(orderStatus);
      return orderRepository.save(order);
    }
    throw new Exception("Please send a valid order status");
  }

  @Override
  public void cancelOrder(String orderId) throws Exception {

    Order order = findOrderById(orderId);
    orderRepository.deleteById(order.getId());
  }

  @Override
  public List<Order> getUserOrder(String userId) throws Exception {
    return orderRepository.findByUserId(userId);
  }

  @Override
  public List<Order> getRestaurantsOrder(String restaurantId, String orderStatus) throws Exception {

    List<Order> orders = orderRepository.findByRestaurantId(restaurantId);
    if (orderStatus != null) {
      orders = orders.stream().filter(order -> order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
    }
    return orders;
  }

  @Override
  public Order findOrderById(String orderId) throws Exception {
    Optional<Order> order = orderRepository.findById(orderId);
    if (order.isEmpty()) {
      throw new Exception("Order not found");
    }
    return order.get();
  }

}
