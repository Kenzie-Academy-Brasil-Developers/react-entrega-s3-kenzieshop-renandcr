import CartStyle from "./styled";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeProductThunk } from "../../store/modules/cart/thunk";

const Cart = ({ current }) => {
  const dispatch = useDispatch();

  return (
    <CartStyle>
      <img src={current.img} alt="Relógio" />
      <div className="div-cart-description">
        <h2>{current.description}</h2>
      </div>
      <div className="div-cart-price">
        <span className="cart-price">R$ {current.price}</span>
        <span
          className="cart-romove"
          onClick={() => dispatch(removeProductThunk(current.id))}
        >
          Remover do carrinho
        </span>
        <ImBin
          className="icon-lixeira"
          onClick={() => dispatch(removeProductThunk(current.id))}
        />
      </div>
    </CartStyle>
  );
};
export default Cart;
