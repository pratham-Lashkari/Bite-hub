import { LOGOUT } from '../Authentication/ActionTypes';
import * as actionTypes from './ActionTypes';

const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIND_CART_REQUEST:
    case actionTypes.GET_ALL_CART_REQUEST:
    case actionTypes.UPDATE_CART_REQUEST:
    case actionTypes.REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.FIND_CART_SUCCESS:
    case actionTypes.CLEAR_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        cartItems : action.payload.cartItems,
        error: null
      };

    case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: null,
        cartItems: [action.payload , ...state.cartItems],
        error: null
      };

    case actionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item),
        error: null
      };

    case actionTypes.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: state.cartItems.filter((item)=>item.id !== action.payload),
        error: null
      };

    case actionTypes.FIND_CART_FAILURE:
    case actionTypes.UPDATE_CART_FAILURE:
    case actionTypes.REMOVE_CART_ITEM_FAILURE:
      return {
        ...state ,
        loading : false,
        error : action.payload
      }
    case actionTypes.CLEAR_CART_FAILURE:
    case actionTypes.GET_ALL_CART_FAILURE:
    case actionTypes.ADD_ITEM_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case LOGOUT:
      localStorage.removeItem("token")
      return {...state , cartItems:[] , cart : null , success : "logout Success"};

    default:
      return state;
  }
};

export default cartReducer;
