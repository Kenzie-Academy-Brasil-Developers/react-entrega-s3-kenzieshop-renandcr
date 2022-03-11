import { combineReducers, createStore } from "redux";

import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducers";

const reducers = combineReducers({
  products: productsReducer,
  cartProducts: cartReducer,
});

const store = createStore(reducers);

export default store;
