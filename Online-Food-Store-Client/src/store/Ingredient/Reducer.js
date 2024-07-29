import {
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_SUCCESS,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  Get_INGREDIENTS,
  UPDATE_STOCK,
} from "./ActionTyeps";

const initialState = {
  ingredients: [],
  update: null,
  category: [],
};
export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case GET_INGREDIENT_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case CREATE_INGREDIENT_CATEGORY_SUCCESS:
      return {
        ...state,
        category: [action.payload, ...state.category],
      };
    case CREATE_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredients: [action.payload, ...state.ingredients],
      };
    case UPDATE_STOCK:
      return {
        ...state,
        update: action.payload,
        ingredients: state.ingredients.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
