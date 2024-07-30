import { 
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANTS_BY_USER_ID_REQUEST,
  GET_RESTAURANTS_BY_USER_ID_SUCCESS,
  GET_RESTAURANTS_BY_USER_ID_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  GET_RESTAURANT_EVENT_CATEGORY_REQUEST,
  GET_RESTAURANT_EVENT_CATEGORY_SUCCESS,
  GET_RESTAURANT_EVENT_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURANT_CATEGORY_REQUEST,
  GET_RESTAURANT_CATEGORY_SUCCESS,
  GET_RESTAURANT_CATEGORY_FAILURE 
} from './ActionTypes';

import axios from 'axios'
import { API_URL } from "../../constants/api";

export const getAllRestaurantsAction = (token) =>{
  return async (dispatch)=>{
    dispatch({type : GET_ALL_RESTAURANTS_REQUEST});
    try {
      const {data} = await axios.get(`${API_URL}/api/restaurant/all`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      console.log("Data of restaurants: ", data);

      dispatch({type : GET_ALL_RESTAURANTS_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : GET_ALL_RESTAURANTS_FAILURE , payload : error})
    }
  }
}

export const getRestaurantById =(reqData)=>{
    return async (dispatch)=>{
      dispatch({type : GET_RESTAURANT_BY_ID_REQUEST});
      try {
        const {data} = await axios.get(`${API_URL}/api/restaurant/${reqData.restaurantId}`,{
          headers :{
            "Content-Type" : "application/json",
             Authorization: `Bearer ${reqData.token}`
          }
        });
        dispatch({type : GET_RESTAURANT_BY_ID_SUCCESS , payload : data});
      } catch (error) {
        dispatch({type : GET_RESTAURANT_BY_ID_FAILURE , payload : error});
      }
    }
}

export const getRestaurantByUserId =(token)=>{
  return async (dispatch)=>{
    dispatch({type : GET_RESTAURANTS_BY_USER_ID_REQUEST});
    try {
      const {data} = await axios.get(`${API_URL}/api/admin/restaurants/user`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : GET_RESTAURANTS_BY_USER_ID_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : GET_RESTAURANTS_BY_USER_ID_FAILURE , payload : error});
    }
  }
}

export const createRestaurant =(reqData)=>{
  return async (dispatch)=>{
    dispatch({type : CREATE_RESTAURANT_REQUEST});
    try {
      const {data} = await axios.post(`${API_URL}/api/admin/restaurants/create`,reqData,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${reqData.token}`
        }
      });
      dispatch({type : CREATE_RESTAURANT_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : CREATE_RESTAURANT_FAILURE , payload : error});
    }
  }
}

export const updateRestaurant =({restaurantId , restaurantData, token})=>{
  return async (dispatch)=>{
    dispatch({type : UPDATE_RESTAURANT_REQUEST});
    try {
      const {data} = await axios.put(`${API_URL}/api/admin/restaurants/${restaurantId}`,restaurantData,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : UPDATE_RESTAURANT_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : UPDATE_RESTAURANT_FAILURE , payload : error});
    }
  }
}

export const deleteRestaurant =({restaurantId , token})=>{
  return async (dispatch)=>{
    dispatch({type : DELETE_RESTAURANT_REQUEST});
    try {
       await axios.delete(`${API_URL}/api/admin/restaurants/${restaurantId}`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : DELETE_RESTAURANT_SUCCESS , payload : restaurantId});
    } catch (error) {
      dispatch({type : DELETE_RESTAURANT_FAILURE , payload : error});
    }
  }
}

export const updateRestaurantStatus =({restaurantId ,  token})=>{
  return async (dispatch)=>{
    dispatch({type : UPDATE_RESTAURANT_STATUS_REQUEST});
    try {
      const {data} = await axios.put(`${API_URL}/api/admin/restaurants/${restaurantId}/status`,{},{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : UPDATE_RESTAURANT_STATUS_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : UPDATE_RESTAURANT_STATUS_FAILURE , payload : error});
    }
  }
}

export const createEventAction =({eventdata ,token , restaurantId})=>{
  return async (dispatch)=>{
    dispatch({type : CREATE_EVENT_REQUEST});
    try {
      const {data} = await axios.post(`${API_URL}/api/admin/events/restaurant/${restaurantId}`,eventdata,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : CREATE_EVENT_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : CREATE_EVENT_FAILURE , payload : error});
    }
  }
}

export const getAllEvents =({token})=>{
  return async (dispatch)=>{
    dispatch({type : GET_ALL_EVENTS_REQUEST});
    try {
      const {data} = await axios.get(`${API_URL}/api/events`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : GET_ALL_EVENTS_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : GET_ALL_EVENTS_FAILURE , payload : error});
    }
  }
}

export const deleteEventAction =({eventId , token})=>{
  return async (dispatch)=>{
    dispatch({type : DELETE_EVENT_REQUEST});
    try {
      const {data} = await axios.delete(`${API_URL}/api/admin/events/${eventId}`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : DELETE_EVENT_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : DELETE_EVENT_FAILURE , payload : error});
    }
  }
}

export const getRestaurantsEvents =({restaurantId , token})=>{
  return async (dispatch)=>{
    dispatch({type : GET_RESTAURANT_EVENT_CATEGORY_REQUEST});
    try {
      const {data} = await axios.get(`${API_URL}/api/admin/events/restaurant/${restaurantId}`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : GET_RESTAURANT_EVENT_CATEGORY_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : GET_RESTAURANT_EVENT_CATEGORY_FAILURE , payload : error});
    }
  }
}

export const createCategoryAction =({reqData , token})=>{
  return async (dispatch)=>{
    dispatch({type : CREATE_CATEGORY_REQUEST});
    try {
      const {data} = await axios.post(`${API_URL}/api/admin/category`,reqData,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : CREATE_CATEGORY_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : CREATE_CATEGORY_FAILURE , payload : error});
    }
  }
}


export const getRestaurantsCategory =({restaurantId , token})=>{
  return async (dispatch)=>{
    dispatch({type : GET_RESTAURANT_CATEGORY_REQUEST});
    try {
      const {data} = await axios.get(`${API_URL}/api/category/restaurant/${restaurantId}`,{
        headers :{
          "Content-Type" : "application/json",
           Authorization: `Bearer ${token}`
        }
      });
      dispatch({type : GET_RESTAURANT_CATEGORY_SUCCESS , payload : data});
    } catch (error) {
      dispatch({type : GET_RESTAURANT_CATEGORY_FAILURE , payload : error});
    }
  }
}