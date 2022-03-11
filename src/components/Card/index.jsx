import CardStyle from "./styled";
import DefaultStyleButton from "../Button/styled";

const Card = ({ current, functionAddCart }) => {
  return (
    <CardStyle>
      <img src={current.img} alt="Relógio" />
      <div>
        <h2>{current.description}</h2>
        <span>R$ {current.price}</span>
        <DefaultStyleButton onClick={() => functionAddCart(current.id)}>
          Adicionar ao carrinho
        </DefaultStyleButton>
      </div>
    </CardStyle>
  );
};

export default Card;
