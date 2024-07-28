import * as actionTypes from './ActionTypes'
const initailState = {
  restaurants : [],
  userRestaurant : null,
  restaurant : null,
  loading :false,
  error : null,
  events : [],
  restaurantEvents :[],
  categories : []
}

export const restaurantReducer =(state = initailState , action)=>{

  switch (action.type) {
    case actionTypes.CREATE_RESTAURANT_REQUEST:
    case actionTypes.GET_ALL_RESTAURANTS_REQUEST:
    case actionTypes.DELETE_RESTAURANT_REQUEST:
    case actionTypes.UPDATE_RESTAURANT_REQUEST:
    case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
    case actionTypes.CREATE_CATEGORY_REQUEST:
      return {
        ...state ,
        loading : true,
        error : null,
      }
    case actionTypes.CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading : false,
        error : null,
      }
    case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state ,
        loading : false,
        restaurants : action.payload
      }
    case actionTypes.GET_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state ,
        loading : false,
        restaurant : action.payload
      }
    case actionTypes.GET_RESTAURANTS_BY_USER_ID_SUCCESS:
    case actionTypes.UPDATE_RESTAURANT_STATUS_SUCCESS:
    case actionTypes.UPDATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading : false,
        userRestaurant:action.payload,
      }
    case actionTypes.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        error : null,
        loading : false,
        restaurants : state.restaurant.filter((item)=> item.id !== action.payload),
        userRestaurant : state.userRestaurant.filter((item)=> item.id !== action.payload),
      }
    case actionTypes.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading : false,
        events : [...state.evnets , action.payload],
        restaurantsEvents : [...state.restaurantEvents , action.payload],
      };
    case actionTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading : false,
        evnets : action.payload
      }
    case actionTypes.GET_RESTAURANT_EVENT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading : false,
        restaurantEvents : action.payload
      }
    case actionTypes.DELETE_EVENT_SUCCESS:
      return {
        ...state , 
        laoding : false,
        events : state.events.filter((item)=>item.id != action.payload)
      };
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading : false,
        categories : [...state.categories , action.payload]
      };
    case actionTypes.GET_RESTAURANT_CATEGORY_SUCCESS:
      return {
        ...state,
        laoding:false,
        categories: action.payload
      }
    case actionTypes.CREATE_EVENT_FAILURE:
    case actionTypes.GET_ALL_RESTAURANTS_FAILURE:
    case actionTypes.DELETE_RESTAURANT_FAILURE:
    case actionTypes.UPDATE_RESTAURANT_FAILURE:
    case actionTypes.GET_RESTAURANT_BY_ID_FAILURE:
    case actionTypes.CREATE_EVENT_FAILURE:
    case actionTypes.CREATE_CATEGORY_FAILURE:
    case actionTypes.GET_RESTAURANT_CATEGORY_FAILURE:
      return {
        ...state,
        loading : false,
        error : action.payload
      }  
    default:
      return state;
  }
}