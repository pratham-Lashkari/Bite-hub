import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  GET_USER_ORDER_FAILURE,
} from './ActionTypes';
import { API_URL } from "../../constants/api";
import axios from 'axios';

export const createOrder =(reqData)=>{
  return async (dispatch)=>{
    console.log("Order is before " + reqData.order.restaurantId)
    dispatch({type : CREATE_ORDER_REQUEST});
    try {
      const {data} = await axios.post(`${API_URL}/api/order`,reqData.order, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      console.log("Order is after" + data)
      dispatch({ type: CREATE_ORDER_SUCCESS , payload : data });
    } catch (error) {
      console.log("Error is " + error)
      dispatch({ type: CREATE_ORDER_FAILURE , payload : error });
    }
  }
}

export const getUserOrder =(token)=>{
  return async (dispatch)=>{
    dispatch({type : GET_USER_ORDER_REQUEST});
    try {
      const {data} = await axios.get(`${API_URL}/api/order/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_USER_ORDER_SUCCESS , payload : data });
    } catch (error) {
      dispatch({ type: GET_USER_ORDER_FAILURE , payload : data });
    }
  }
}
