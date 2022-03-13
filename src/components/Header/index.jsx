import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import HeaderContainer from "./styled";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ amount }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      left: -20,
      top: 2,
      border: `0.2px solid ${theme.palette.background.paper}`,
      minWidth: "5px",
      maxWidth: "5px",
      maxHeight: "14px",
      fontSize: "8px",
      marginBotton: "20px",
    },
  }));

  const history = useHistory();

  return (
    <HeaderContainer>
      <div className="header-div-parent">
        <div className="header-div-logo">
          <span>Kenzie Shop</span>
        </div>
        <ul>
          <li
            onClick={() => {
              history.push("/");
              localStorage.clear();
            }}
          >
            Sair
          </li>
          <li onClick={() => history.push("/")}>
            <MdOutlineArrowBack className="header-icons" /> Voltar
          </li>
          <li onClick={() => history.push("/cart")}>
            <StyledBadge badgeContent={amount} color="primary" fontSize="small">
              <ShoppingCartIcon sx={{ fontSize: 16 }} />
            </StyledBadge>
            Carrinho
          </li>

          <li onClick={() => history.push("/login")}>
            <FiLogIn className="header-icons" /> Login
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
