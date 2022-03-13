import { ADD_PRODUCT, REMOVE_PRODUCT, USER_VALIDATION } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default cartReducer;
