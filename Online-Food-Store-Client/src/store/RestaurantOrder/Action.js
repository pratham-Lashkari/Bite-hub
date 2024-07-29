import axios from 'axios';
import {API_URL} from '../../constants/api'
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from './ActionTypes'
import { UPDATE_CART_SUCCESS } from '../Cart/ActionTypes';


export const updateOrderStatus =({orderId, orderStatus , token})=>{
  return async (dispatch)=>{
    try {
      dispatch({type : UPDATE_ORDER_STATUS_REQUEST});
      const {data} = await axios.put(`${API_URL}/api/admin/order/${orderId}/${orderStatus}`, {},{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type : UPDATE_ORDER_STATUS_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : UPDATE_ORDER_STATUS_FAILURE , payload : error});
    }
  }
}

export const fetchRestaurantsOrder =({restaurantId, orderStatus , token})=>{
  return async (dispatch)=>{
    try {
      dispatch({type : GET_RESTAURANT_ORDER_REQUEST});
      const {data} = await axios.get(`${API_URL}/api/admin/order/restaurant/${restaurantId}`, {},{
        params:{
          order_status : orderStatus,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type : GET_RESTAURANT_ORDER_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : GET_RESTAURANT_ORDER_FAILURE , payload : error});
    }
  }
}