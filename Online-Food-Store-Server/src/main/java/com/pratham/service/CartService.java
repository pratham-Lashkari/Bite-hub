package com.pratham.service;

import java.util.List;

import com.pratham.model.Cart;
import com.pratham.model.CartItem;
import com.pratham.request.AddCartItemRequest;
import com.pratham.response.CartResponse;

public interface CartService {

  public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;

  public CartItem updateCartItemQuantity(String cartItemId, int quantity) throws Exception;

  public Cart removeItemFormCart(String cartItemId, String jwt) throws Exception;

  public Long calculateCartTotals(Cart cart) throws Exception;

  public Cart findCartById(String id) throws Exception;

  public CartResponse findCartByUserId(String userId) throws Exception;

  public Cart clearCart(String userId) throws Exception;

  public List<CartItem> getAllCartItem(String cartId) throws Exception;

}
