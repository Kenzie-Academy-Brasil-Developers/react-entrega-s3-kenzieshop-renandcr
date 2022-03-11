import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import HeaderContainer from "./styled";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <div>Kenzie Shop</div>
      <ul>
        <li onClick={() => history.push("/")}>Voltar</li>
        <li onClick={() => history.push("/cart")}>Carrinho</li>
        <li>Entrar</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
