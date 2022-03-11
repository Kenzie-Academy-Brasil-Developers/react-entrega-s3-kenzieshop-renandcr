import { ADD_PRODUCT } from "./actionTypes";
import { REMOVE_PRODUCT } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      const { id } = action.product;
      const filterProducts = state.filter((current) => current.id !== id);
      return [...filterProducts];
    default:
      return state;
  }
};

export default cartReducer;
