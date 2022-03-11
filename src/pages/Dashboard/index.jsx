import Card from "../../components/Card/index";
import DisplayCardSectionStyles from "./styled";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/modules/cart/action";

const Dashboard = () => {
  const products = useSelector((state) => state.products);
  const productsCart = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const functionAddCart = (newId) => {
    const findProduct = products.find((current) => current.id === newId);
    const findProductCart = productsCart.find(
      (current) => current.id === newId
    );
    findProductCart === undefined
      ? dispatch(addProduct(findProduct))
      : console.log("Esse produto já está no carrinho");
  };
  return (
    <DisplayCardSectionStyles>
      <ul>
        {products.map((current, index) => (
          <Card
            functionAddCart={functionAddCart}
            key={index}
            current={current}
          />
        ))}
      </ul>
    </DisplayCardSectionStyles>
  );
};

export default Dashboard;
