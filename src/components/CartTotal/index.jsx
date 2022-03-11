import DefaultStyleButton from "../Button/styled";
import CartTotalStyle from "./styled";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CartTotal = ({ current }) => {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  const history = useHistory();

  const productCart = useSelector((state) => state.cartProducts);

  useEffect(() => {
    const total = productCart.reduce((acc, current) => acc + current.price, 0);
    setTotal(total.toFixed(3));
    const amount = productCart.length;
    setAmount(amount);
  }, [productCart]);

  console.log(total);
  return (
    <CartTotalStyle>
      <div className="div-cart-title">
        <h2>Resumo do pedido</h2>
      </div>
      <div>
        <span>{amount} unidades</span>
        <span className="total-price">R$ {total}</span>
      </div>
      <span className="bye-continue" onClick={() => history.push("/")}>
        Continuar comprando
      </span>
      <DefaultStyleButton>Finalizar pedido</DefaultStyleButton>
    </CartTotalStyle>
  );
};
export default CartTotal;
