import DefaultStyleButton from "../Button/styled";
import CartTotalStyle from "./styled";
import { useHistory } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CartTotal = ({ total, amount }) => {
  const history = useHistory();
  const cartProducts = useSelector((state) => state.cartProducts);

  const finalizeOrder = () => {
    const user = JSON.parse(localStorage.getItem("@kenzieShop:user")) || null;

    if (cartProducts.length === 0) {
      toast.error("Você ainda não tem produtos no carrinho");
    } else if (user == null) {
      toast.error("Faça o login antes de finalizar o pedido");
    } else {
      toast.success("Compra realizado com sucesso");
    }
  };

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
        <BsHandbag /> Continuar comprando
      </span>
      <DefaultStyleButton onClick={finalizeOrder}>
        Finalizar pedido
      </DefaultStyleButton>
    </CartTotalStyle>
  );
};
export default CartTotal;
