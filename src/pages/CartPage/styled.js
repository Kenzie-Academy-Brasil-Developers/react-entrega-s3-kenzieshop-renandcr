import styled from "styled-components";
const CartSectionStyle = styled.section`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 155px;
  @media (min-width: 660px) {
    margin-top: 110px;
  }
  @media (max-width: 1000px) {
    align-items: center;
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
  ul {
    margin: 0;
    padding: 0;
    /* ::-webkit-scrollbar {  

display: none;

} */
  }
`;
export default CartSectionStyle;
