package com.pratham.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratham.model.Cart;
import com.pratham.model.CartItem;
import com.pratham.model.Food;
import com.pratham.model.User;
import com.pratham.repository.CartItemRepository;
import com.pratham.repository.CartRepository;
import com.pratham.request.AddCartItemRequest;
import com.pratham.service.CartService;
import com.pratham.service.FoodService;
import com.pratham.service.UserService;

@Service
public class CartServiceImlp implements CartService {

  @Autowired
  private CartRepository cartRepository;

  @Autowired
  private UserService userService;

  @Autowired
  private CartItemRepository cartItemRepository;

  @Autowired
  private FoodService foodService;

  @Override
  public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartRepository.findByCustomerId(user.getId());

    for (CartItem cartItem : cart.getCartItems()) {
      if (cartItem.getFoodId().equals(req.getFoodId())) {
        int newQuantity = cartItem.getQuantity() + req.getQuantity();
        return updateCartItemQuantity(cartItem.getId(), newQuantity);
      }
    }
    CartItem newCartItem = new CartItem();
    newCartItem.setFoodId(req.getFoodId());
    newCartItem.setCartId(cart.getId());
    newCartItem.setQuantity(req.getQuantity());
    newCartItem.setIngredients(req.getIngredients());
    newCartItem.setTotalPrice(req.getTotalPrice());

    CartItem savCartItem = cartItemRepository.save(newCartItem);
    cart.getCartItems().add(savCartItem);
    cartRepository.save(cart);
    return savCartItem;
  }

  @Override
  public CartItem updateCartItemQuantity(String cartItemId, int quantity) throws Exception {
    Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
    if (cartItemOptional.isEmpty()) {
      throw new Exception("Cart item not found");
    }
    CartItem item = cartItemOptional.get();
    item.setQuantity(quantity);
    Food food = foodService.findFoodById(item.getFoodId());
    item.setTotalPrice(food.getPrice() * quantity);
    return null;
  }

  @Override
  public Cart removeItemFormCart(String cartItemId, String jwt) throws Exception {
    User user = userService.findUserByJwtToken(jwt);
    Cart cart = cartRepository.findByCustomerId(user.getId());
    Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
    if (cartItemOptional.isEmpty()) {
      throw new Exception("Cart item not found");
    }
    CartItem item = cartItemOptional.get();
    cart.getCartItems().remove(item);
    return cartRepository.save(cart);\
  }

  @Override
  public Long calculateCartTotals(Cart cart) throws Exception {
    return null;
  }

  @Override
  public Cart findCartById(String id) throws Exception {
    return null;
  }

  @Override
  public Cart clearCart(String userId) throws Exception {
    return null;
  }
}
