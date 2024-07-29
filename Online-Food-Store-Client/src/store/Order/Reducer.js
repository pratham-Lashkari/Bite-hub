import {
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  GET_USER_ORDER_FAILURE,
} from './ActionTypes';

const intialState = {
  loading : false,
  orders : [],
  error : null,
  notifiactions : []
}

const  orderReducer = (state = intialState , {type , payload}) => {

  switch (type) {
    case GET_USER_ORDER_REQUEST:
    return {
      ...state,
      error : null,
      loading : true,
    }
    case GET_USER_ORDER_SUCCESS:
      return {
        ...state,
        error : null,
        loading : false,
        orders : payload
      }
      case GET_USER_ORDER_FAILURE:
        return {
          ...state,
          error : payload,
          loading : false,
        }  
    default:
      return state;
  }
}

export  default orderReducer;