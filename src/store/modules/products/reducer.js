import db from "./db";

const initialValue = db;

const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
