package com.pratham.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratham.model.Cart;
import com.pratham.model.CartItem;
import com.pratham.request.AddCartItemRequest;
import com.pratham.request.UpdateCartItemRequest;
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
    return new ResponseEntity<>(cartItem, HttpStatus.OK);
  }

  @PutMapping("/cart-item/update")
  public ResponseEntity<CartItem> updateCartItemQuantity(@RequestBody UpdateCartItemRequest req,
      @RequestHeader("Authorization") String jwt) throws Exception {
    CartItem cartItem = cartService.updateCartItemQuantity(req.getCartItemId(), req.getQuantity());
    return new ResponseEntity<>(cartItem, HttpStatus.OK);
  }

  @DeleteMapping("/cart-item/{id}/remove")
  public ResponseEntity<Cart> removeCartItem(@PathVariable String id,
      @RequestHeader("Authorization") String jwt) throws Exception {
    Cart cartItem = cartService.removeItemFormCart(id, jwt);
    return new ResponseEntity<>(cartItem, HttpStatus.OK);
  }

  @PutMapping("/cart/clear")
  public ResponseEntity<Cart> clearCart(@RequestHeader("Authorization") String jwt) throws Exception {
    Cart cart = cartService.clearCart(jwt);
    return new ResponseEntity<>(cart, HttpStatus.OK);
  }

  @GetMapping("/cart")
  public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws Exception {
    Cart cart = cartService.findCartByUserId(jwt);
    return new ResponseEntity<>(cart, HttpStatus.OK);
  }

}
