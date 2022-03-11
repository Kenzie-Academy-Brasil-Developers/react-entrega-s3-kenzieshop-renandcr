import styled from "styled-components";

const CardStyle = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 15px 10px 15px 10px;
  text-align: left;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--color-primary);
  box-shadow: 0 4px 34px -12px #343a40;
  @media (min-width: 1500px) {
    margin: 10px 20px 40px 20px;
  }
  @media (min-width: 1600px) {
    margin: 10px 30px 40px 30px;
  }
  @media (min-width: 1700px) {
    margin: 10px 40px 40px 40px;
  }
  img {
    cursor: pointer;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 32px -15px #343a40;

    :hover {
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
    max-width: 100%;
  }
  h2 {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: #ffffff;
  }
  span {
    margin: 7px 0 0 0;

    color: var(--color-secundary);

    font-size: 13px;
    font-weight: 600;
  }
  button {
    margin: 12px 0 0 0;
  }
`;
export default CardStyle;
