import { useSelector, useDispatch } from "react-redux";
import Cart from "../../components/Cart";
import CartTotal from "../../components/CartTotal";
import CartSectionStyle from "./styled";
import { removeProduct } from "../../store/modules/cart/action";

const CartPage = ({ total, amount }) => {
  const productsCart = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const functionRemoveProduct = (newId) => {
    const findProduct = productsCart.find((current) => current.id === newId);
    dispatch(removeProduct(findProduct));
  };

  const user = JSON.parse(localStorage.getItem("@kenzieShop:user")) || null;

  return (
    <CartSectionStyle>
      <ul>
        {user !== null && <h1>Seja bem-vindo(a), {user.name}</h1>}
        {productsCart.length > 0 &&
          productsCart.map((current, index) => (
            <Cart
              key={index}
              current={current}
              functionRemoveProduct={functionRemoveProduct}
            />
          ))}
      </ul>
      <CartTotal total={total} amount={amount} />
    </CartSectionStyle>
  );
};
export default CartPage;
