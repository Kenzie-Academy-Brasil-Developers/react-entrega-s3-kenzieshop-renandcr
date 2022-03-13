import styled from "@emotion/styled";

const Container = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 110px;
  padding: 25px 0 25px 0;
  width: 285px;
  border-radius: 4px;
  box-shadow: 0 4px 34px -20px #6c757d;

  @media (max-width: 650px) {
    margin-top: 155px;
  }
  .div-input-login {
    /* margin: 0;
    box-sizing: border-box; */
  }
  h2 {
    margin: 0 0 15px 0;
    font-size: 17px;
    color: #6c757d;
  }
  p {
    margin: -6px 0 0 19px;
    font-size: 10px;
    color: rgb(212, 32, 32);
    text-align: left;
  }
  .button-login {
    width: 255px;
    margin: 10px 0 0 0;
  }
`;

export default Container;
