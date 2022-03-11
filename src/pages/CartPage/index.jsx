import { useSelector, useDispatch } from "react-redux";
import Cart from "../../components/Cart";
import CartTotal from "../../components/CartTotal";
import CartSectionStyle from "./styled";
import { removeProduct } from "../../store/modules/cart/action";

const CartPage = () => {
  const productsCart = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const functionRemoveProduct = (newId) => {
    const findProduct = productsCart.find((current) => current.id === newId);
    dispatch(removeProduct(findProduct));
  };

  return (
    <CartSectionStyle>
      <ul>
        {productsCart.length > 0 &&
          productsCart.map((current, index) => (
            <Cart
              key={index}
              current={current}
              functionRemoveProduct={functionRemoveProduct}
            />
          ))}
      </ul>
      <CartTotal />
    </CartSectionStyle>
  );
};
export default CartPage;
