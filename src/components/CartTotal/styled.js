import styled from "styled-components";

const CartTotalStyle = styled.div`
  margin-bottom: 15px;
  width: 250px;
  height: 250px;
  border-radius: 0 0 4px;
  padding-bottom: 25px;
  border-radius: 4px;
  background-color: #edf2f4;
  box-shadow: 0 4px 34px -20px #6c757d;
  .div-cart-title {
    background-color: var(--color-alternative);
    margin: 0;
    max-width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px 4px 0 0;
  }
  h2 {
    margin: 0;
    font-size: 16px;
    color: #ffffff;
  }
  div {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 15px 30px 15px;
  }
  span {
    font-size: 15px;
    color: #495057;
    font-weight: 600;
  }
  .total-price {
    color: #926c15;
  }
  .bye-continue {
    font-weight: 500;
    font-size: 13.5px;
    border-bottom: 1.5px solid gray;
    cursor: pointer;
    color: #6c757d;
    :hover {
      color: var(--color-alternative);
      border-bottom: 1.5px solid var(--color-alternative);
      color: #a47e1b;
      border-bottom: 1.5px solid #a47e1b;
    }
  }
  button {
    margin-top: 35px;
    width: 90%;
  }
`;
export default CartTotalStyle;
