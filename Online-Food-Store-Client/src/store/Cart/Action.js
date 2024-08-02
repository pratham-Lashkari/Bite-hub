import {
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  FIND_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  GET_ALL_CART_REQUEST,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAILURE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
} from "./ActionTypes";

import axios from "axios";
import { API_URL } from "../../constants/api";

export const findCart = (token) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
      const {data} = await axios.get(`${API_URL}/api/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Cart is " + data.total)
      dispatch({ type: FIND_CART_SUCCESS , payload : data });
    } catch (error) {
      dispatch({ type: FIND_CART_FAILURE , payload : error });
    }
  };
};

export const getAllCartItems = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_REQUEST });
    try {
      const {data} = await axios.get(`${API_URL}/api/carts/${reqData.cartId}/items`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_ALL_CART_SUCCESS , payload : data});
    } catch (error) {
      dispatch({ type: GET_ALL_CART_FAILURE , payload : error });
    }
  };
};

export const addItemToCart = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
      const {data} = await axios.post(`${API_URL}/api/cart/add`, reqData.cartItem,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload : data});
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE , payload : error });
    }
  };
};

export const updateCartItem = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST });
    try {
      const {data} = await axios.put(`${API_URL}/api/cart-item/update`, reqData.data,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: UPDATE_CART_SUCCESS, payload : data});
    } catch (error) {
      dispatch({ type: UPDATE_CART_FAILURE , payload : error });
    }
  };
};

export const removeCartItem = ({cartItemId , token}) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });
    try {
      const {data} = await axios.delete(`${API_URL}/api/cart-item/{id}/remove`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload : data});
    } catch (error) {
      dispatch({ type: REMOVE_CART_ITEM_FAILURE , payload : error });
    }
  };
};

export const clearCartAction = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST });
    try {
      const {data} = await axios.delete(`${API_URL}/api/cart/clear`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({ type: CLEAR_CART_SUCCESS, payload : data});
    } catch (error) {
      dispatch({ type: CLEAR_CART_FAILURE , payload : error });
    }
  };
};