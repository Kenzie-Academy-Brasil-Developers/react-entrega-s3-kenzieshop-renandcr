import { ADD_PRODUCT } from "./actionTypes";
import { REMOVE_PRODUCT } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      const { id } = action.product;
      // console.log(id);
      const filterProducts = state.filter((current) => current.id !== id);
      return [...filterProducts];
    default:
      return state;
  }
};

// const cartFilterProductsReducer = (state = [], action) => {
//   switch(action.type){
//     case REMOVE_PRODUCT:
//       return [action];
//     default:
//       return state

//   }
// }

export default cartReducer;
