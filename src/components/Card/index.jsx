import CardStyle from "./styled";
import DefaultStyleButton from "../Button/styled";
import { addProductToCart } from "../../store/modules/cart/thunk";
import { useDispatch } from "react-redux";
const Card = ({ current }) => {
  const dispatch = useDispatch();
  return (
    <CardStyle>
      <img src={current.img} alt="Relógio" />
      <div>
        <h2>{current.description}</h2>
        <span>R$ {current.price}</span>
        <DefaultStyleButton
          onClick={() => {
            dispatch(addProductToCart(current.id));
          }}
        >
          Adicionar ao carrinho
        </DefaultStyleButton>
      </div>
    </CardStyle>
  );
};
export default Card;
