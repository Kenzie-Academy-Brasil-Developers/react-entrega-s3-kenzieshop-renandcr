import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
const defaultValue =
  JSON.parse(localStorage.getItem("@kenzieShop:product")) || [];

const cartReducer = (state = defaultValue, action) => {
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
