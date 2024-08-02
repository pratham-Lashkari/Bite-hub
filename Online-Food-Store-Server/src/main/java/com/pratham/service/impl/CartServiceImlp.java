package com.pratham.service.impl;

import java.util.ArrayList;
import java.util.List;
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
import com.pratham.response.CartItemResponse;
import com.pratham.response.CartResponse;
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
      System.out.println("Cart is upading" + cart);

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
    cart.setTotal(req.getTotalPrice());
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
    cartItemRepository.save(item);

    Cart cart = findCartById(item.getCartId());
    for (CartItem items : cart.getCartItems()) {
      if (items.getCartId().equals(cart.getId())) {
        items.setQuantity(quantity);
        items.setTotalPrice(food.getPrice() * quantity);
      }
      Long price = cart.getTotal();
      cart.setTotal((price + items.getTotalPrice()));
    }
    cartRepository.save(cart);
    return item;
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
    return cartRepository.save(cart);
  }

  @Override
  public Long calculateCartTotals(Cart cart) throws Exception {
    Long total = 0L;
    for (CartItem cartItem : cart.getCartItems()) {
      Food food = foodService.findFoodById(cartItem.getFoodId());
      total += food.getPrice() * cartItem.getQuantity();
    }
    return total;
  }

  @Override
  public Cart findCartById(String id) throws Exception {
    Optional<Cart> optCart = cartRepository.findById(id);
    if (optCart.isEmpty()) {
      throw new Exception("Cart item not found");
    }
    return optCart.get();
  }

  @Override
  public Cart clearCart(String userId) throws Exception {
    Cart cart = cartRepository.findByCustomerId(userId);
    cart.getCartItems().clear();
    return cartRepository.save(cart);
  }

  @Override
  public CartResponse findCartByUserId(String userId) throws Exception {
    Cart cart = cartRepository.findByCustomerId(userId);
    CartResponse cartResponse = new CartResponse();
    cartResponse.setId(cart.getId());
    cartResponse.setCustomerId(cart.getCustomerId());
    cartResponse.setTotal(cart.getTotal());
    List<CartItemResponse> cartItemResponses = new ArrayList<>();
    for (CartItem cartItem : cart.getCartItems()) {
      CartItemResponse cartItemResponse = new CartItemResponse();
      Food food = foodService.findFoodById(cartItem.getFoodId());
      String name = food.getName();
      List<String> image = food.getImages();
      cartItemResponse.setId(cartItem.getId());
      cartItemResponse.setName(name);
      cartItemResponse.setImages(image);
      cartItemResponse.setQuantity(cartItem.getQuantity());
      cartItemResponse.setTotalPrice(cartItem.getTotalPrice());
      cartItemResponses.add(cartItemResponse);
    }
    cartResponse.setCartItems(cartItemResponses);
    return cartResponse;
  }

  @Override
  public List<CartItem> getAllCartItem(String cartId) throws Exception {
    return cartItemRepository.findByCartId(cartId);
  }
}
