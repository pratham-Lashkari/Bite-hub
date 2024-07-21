package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Order;
import com.pratham.model.User;
import com.pratham.request.OrderRequest;
import com.pratham.service.OrderService;
import com.pratham.service.UserService;

@RestController
@RequestMapping("/api")
public class OrderController {

  @Autowired
  private OrderService orderService;

  @Autowired
  private UserService userService;

  @PostMapping("/order")
  public ResponseEntity<Order> createOrder(@RequestBody OrderRequest req, @RequestHeader("Authorization") String jwt)
      throws Exception {

    User user = userService.findUserByJwtToken(jwt);
    Order order = orderService.createOrder(req, user);
    return new ResponseEntity<>(order, HttpStatus.CREATED);
  }
}
