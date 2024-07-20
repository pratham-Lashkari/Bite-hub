package com.pratham.service.impl;

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
    Food food = foodService.findFoodById(req.getFoodId());
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
    return savCartItem;
  }

  @Override
  public CartItem updateCartItemQuantity(String cartItemId, int quantity) throws Exception {
    return null;
  }

  @Override
  public Cart removeItemFormCart(String cartItemId, String jwt) throws Exception {
    return null;
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
