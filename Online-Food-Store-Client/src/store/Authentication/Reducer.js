import { isPresentInFavorites } from "../../constants/utils"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"

const intialState = {
  user : null,
  isLoading : false,
  error : null,
  token : null,
  favorites : [],
  success : null,
}

export const authReducer = (state = intialState , action)=>
{
  switch(action.type)
  {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVORITE_REQUEST:
      return {...state , isLoading : true , token : action.payload, error : null , success : null}
    
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading : false,
        token : action.payload,
        success : "Register Success"
      }
    case ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state ,
        isLoading : false,
        error : null,
        favorites : isPresentInFavorites(state.favorites , action.payload) ?
        state.favorites.filter((item) => item.id !== action.payload.id):
        [action.payload , ...state.favorites]
      }
      case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
          return {...state , isLoading : false , error : action.payload , success : null}
      default:
        return state;
  }
}