import {applyMiddleware , combineReducers , legacy_createStore} from "redux"
import {authReducer} from './Authentication/Reducer'
import {thunk} from 'redux-thunk'
import menuItemReducer from './Menu/Reducer'
import cartReducer from "./Cart/Reducer"
import orderReducer from './Order/Reducer'
import restaurantsOrderReducer from "./RestaurantOrder/Reducer";
import { ingredientReducer } from './Ingredient/Reducer'
import { restaurantReducer } from "./Restaurant/Reducer"
const rootReducer = combineReducers({
  auth : authReducer,
  restaurant : restaurantReducer,
  menu : menuItemReducer,
  cart : cartReducer,
  order : orderReducer,
  restaurantOrder : restaurantsOrderReducer,
  ingredients : ingredientReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));