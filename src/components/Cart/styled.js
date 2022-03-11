import styled from "styled-components";

const CartStyle = styled.li`
  padding: 0px 50px 0 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 100px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #edf2f4;
  box-shadow: 0 4px 34px -20px #6c757d;

  @media (min-width: 410px) {
    padding-right: 15px;
    width: 400px;
  }
  @media (min-width: 510px) {
    width: 500px;
    height: 111px;
    margin-bottom: 15px;
  }
  @media (min-width: 610px) {
    height: 120px;
    width: 600px;
  }
  @media (min-width: 1000px) {
    margin-right: 90px;
  }
  .div-cart-img {
    width: 200px;
    height: 200px;
  }
  img {
    max-height: 100%;
    border-radius: 4px;
  }
  .div-cart-description {
    padding: 0 5px 0 5px;
    display: flex;
    align-items: center;
    display: flex;
    h2 {
      font-size: 14px;
      margin: 0;
      color: #926c15;
    }
    @media (max-width: 410px) {
      display: none;
      margin: 0 5px 0 5px;
    }
  }

  .div-cart-price {
    display: flex;
    color: #495057;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 0;
    @media (max-width: 510px) {
      min-width: 60px;
    }
    span {
      color: #495057;
    }
    .cart-price {
      font-size: 13.5px;
      font-weight: 600;
      color: #a47e1b;
    }
    .cart-romove {
      cursor: pointer;
      font-size: 10px;
      font-family: "Roboto";
      border-bottom: 1.5px solid gray;
      :hover {
      }
      @media (max-width: 610px) {
        display: none;
      }
    }
    .icon-lixeira {
      cursor: pointer;
      :hover {
        filter: brightness(75%);
        transition: 0.3s;
      }
      :active {
        filter: brightness(1.6);
        transition: 0.3s;
      }

      @media (min-width: 610px) {
        display: none;
      }
    }
  }
`;
export default CartStyle;
