import axios from 'axios'
import {API_URL} from'../../constants/api'
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, Get_INGREDIENTS, UPDATE_STOCK } from './ActionTyeps' 


export const getIngredientsOfRestaurant = ({id , token})=>{
  return async (dispatch)=>{
    try {
      const {data} = await axios.get(`${API_URL}/api/admin/ingredients/restauant/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type : Get_INGREDIENTS , payload : data});
    } catch (error) {
      console.log("Error = " + error);
    }
  }
}

export const createIngredientCategory = ({reqData , token})=>{
  return async (dispatch)=>{
    try {
      const {data} = await axios.post(`${API_URL}/api/admin/ingredients/category`,reqData,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type : CREATE_INGREDIENT_CATEGORY_SUCCESS , payload : data});
    } catch (error) {
      console.log("Error = " + error);
    }
  }
}

export const getIngredientCategory = ({id , token})=>{
  return async (dispatch)=>{
    try {
      const {data} = await axios.get(`${API_URL}/api/admin/ingredients/restaurant/${id}/category`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type : GET_INGREDIENT_CATEGORY_SUCCESS , payload : data});
    } catch (error) {
      console.log("Error = " + error);
    }
  }
}
export const updateStockofIngredient = ({id , token})=>{
  return async (dispatch)=>{
    try {
      const {data} = await axios.put(`${API_URL}/api/admin/ingredients/${id}/stock`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({type : UPDATE_STOCK , payload : data});
    } catch (error) {
      console.log("Error = " + error);
    }
  }
}