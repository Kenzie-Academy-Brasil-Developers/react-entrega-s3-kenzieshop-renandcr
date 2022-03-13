import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducers";

const reducers = combineReducers({
  products: productsReducer,
  cartProducts: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
