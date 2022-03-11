import CartStyle from "./styled";
import { ImBin } from "react-icons/im";
const Cart = ({ current, functionRemoveProduct }) => {
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
          onClick={() => functionRemoveProduct(current.id)}
          icon={ImBin}
        >
          Remover do carrinho
        </span>
        <ImBin
          className="icon-lixeira"
          onClick={() => functionRemoveProduct(current.id)}
        />
      </div>
    </CartStyle>
  );
};
export default Cart;
