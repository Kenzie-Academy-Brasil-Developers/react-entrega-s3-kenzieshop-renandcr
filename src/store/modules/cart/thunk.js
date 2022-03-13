import { removeProduct, addProduct } from "./action";
import { toast } from "react-toastify";

export const removeProductThunk = (newId) => {
  return (dispatch, getState) => {
    const { cartProducts } = getState();
    const filterProducts = cartProducts.filter(
      (current) => current.id !== newId
    );
    dispatch(removeProduct(filterProducts));
  };
};

export const addProductToCart = (newId) => {
  return (dispatch, getState) => {
    const { cartProducts } = getState();
    const { products } = getState();

    const findSelectedProduct = products.find(
      (current) => current.id === newId
    );
    const findProductInCart = cartProducts.find(
      (current) => current.id === newId
    );

    findProductInCart === undefined
      ? dispatch(addProduct(findSelectedProduct)) &&
        localStorage.setItem(
          "@kenzieShop:product",
          JSON.stringify(cartProducts)
        )
      : toast.error("Esse produto já está no carrinho");
  };
};
