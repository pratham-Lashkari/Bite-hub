package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.CartItem;
import com.pratham.request.AddCartItemRequest;
import com.pratham.service.CartService;

@RestController
@RequestMapping("/api")
public class CartController {

  @Autowired
  private CartService cartService;

  @PostMapping("/cart/add")
  public ResponseEntity<CartItem> addItemCart(@RequestBody AddCartItemRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {
    CartItem cartItem = cartService.addItemToCart(req, jwt);
    return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
  }

  @PutMapping("/cart-item/update")
  public ResponseEntity<CartItem> updateCartItemQuantity(@RequestBody AddCartItemRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {
    CartItem cartItem = cartService.addItemToCart(req, jwt);
    return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
  }

}
