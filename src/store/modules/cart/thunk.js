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

    if (findProductInCart === undefined) {
      const cartData = [...cartProducts, findSelectedProduct];
      localStorage.setItem("@kenzieShop:product", JSON.stringify(cartData));
      dispatch(addProduct(findSelectedProduct));
    } else {
      toast.error("Esse produto já está no carrinho");
    }
  };
};
