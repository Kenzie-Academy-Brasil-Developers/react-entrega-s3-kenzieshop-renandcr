import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import HeaderContainer from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";
const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <div className="header-div-parent">
        <div className="header-div-logo">
          <span>Kenzie Shop</span>
        </div>
        <ul>
          <li onClick={() => history.push("/")} icon={MdOutlineArrowBack}>
            <MdOutlineArrowBack className="header-icons" /> Voltar
          </li>
          <li
            onClick={() => history.push("/cart")}
            icon={AiOutlineShoppingCart}
          >
            <AiOutlineShoppingCart className="header-icons" /> Carrinho
          </li>

          <li icon={FiLogIn}>
            <FiLogIn className="header-icons" /> Entrar
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
