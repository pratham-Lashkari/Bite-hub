import axios from "axios";
import { API_URL } from "../../constants/api";
import {
  ADD_TO_FAVORITE_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./ActionTypes";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signup`,
      reqData.userData
    );
    if (data.token) localStorage.setItem("token", data.token);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: REGISTER_SUCCESS, payload: data.token });
  } catch (error) {
    dispatch({type : REGISTER_FAILURE , payload : error});
    console.log("Error ", error);
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/login`,
      reqData.userData
    );
    if (data.token) localStorage.setItem("token", data.token);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data.token });
  } catch (error) {
    dispatch({type : LOGIN_SUCCESS , payload : error});
    console.log("Error ", error);
  }
};

export const getUser = (token, navigate) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_URL}/users/profile`,{
      headers: {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: GET_USER_SUCCESS , payload : data });
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      navigate("/admin/restaurant");
    } else {
      navigate("/");
    }
    
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
    console.log("Error ", error);
  }
};

export const addToFavorite = (token , restaurantId) => async (dispatch) => {
  console.log( "Token is " + token +  " Resturant id is " + restaurantId)
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });
  try {
    const { data } = await axios.put(`${API_URL}/api/restaurant/${restaurantId}/add-favourites`,{},{
      headers: {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`
      }
      });    
    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({type : ADD_TO_FAVORITE_FAILURE , payload : error});
    console.log("Error ", error);
  }
};


export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT});
    localStorage.clear();
    console.log("logout success")
  } catch (error) {
    console.log("Error ", error);
  }
};