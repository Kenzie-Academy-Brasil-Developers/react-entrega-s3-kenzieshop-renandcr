import styled from "styled-components";

const CartStyle = styled.li`
  /* border: solid 1px red; */
  padding-right: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 120px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #edf2f4;
  box-shadow: 0 4px 34px -20px #6c757d;
  /* box-shadow: 5px 5px 5px black; */
  .div-cart-img {
    width: 200px;
    height: 200px;
  }
  /* .div-cart-img {
    border: solid 1px gray;
    height: 100%;
  } */
  img {
    /* max-width: 100%; */
    max-height: 100%;
    border-radius: 4px;
  }
  .div-cart-description {
    display: flex;
    align-items: center;
    /* border: solid 1px gray; */
    display: flex;
    h2 {
      font-size: 14px;
      margin: 0;
      color: #495057;
      color: #926c15;
    }
  }

  .div-cart-price {
    display: flex;
    color: #495057;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 20px 0;
    /* border: solid 1px gray; */
    span {
      color: #495057;
    }
    .cart-price {
      font-size: 13.5px;
      font-weight: 600;
      color: #926c15;
      color: #a47e1b;
    }
    .cart-romove {
      cursor: pointer;
      font-size: 10px;
      font-family: "Roboto";
      border-bottom: 1.5px solid gray;
      :hover {
        color: #a47e1b;
        border-bottom: 1.5px solid #a47e1b;
      }
    }
  }
`;
export default CartStyle;
