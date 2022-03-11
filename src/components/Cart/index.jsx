import CartStyle from "./styled";
const Cart = ({ current, functionRemoveProduct }) => {
  return (
    <CartStyle>
      {/* <div className="div-cart-img">
      </div> */}
      <img src={current.img} alt="Relógio" />
      <div className="div-cart-description">
        <h2>{current.description}</h2>
      </div>
      <div className="div-cart-price">
        <span className="cart-price">R$ {current.price}</span>
        <span
          className="cart-romove"
          onClick={() => functionRemoveProduct(current.id)}
        >
          Remover do carrinho
        </span>
      </div>
    </CartStyle>
  );
};
export default Cart;
