import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 75px;
  /* border: solid gray 1px; */
  margin-bottom: 25px;
  /* background-color: #f3caa8;
  background-color: #edf6f9;
  background-color: #89c2d9;
  background-color: #a9d6e5; */
  background-color: var(--color-primary);

  /* box-shadow: 0 4px 32px -10px #89c2d9; */
  box-shadow: 0 4px 32px -12px black;
  box-shadow: 0 4px 34px -12px #6c757d;
  box-shadow: 0 4px 34px -12px #343a40;
  div {
    margin: 0 0 0 90px;
    border-radius: 4px;
    padding: 8px;
    color: #ffffff;
    /* background-color: #05668d; */
    background-color: var(--color-alternative);
    box-shadow: 0 4px 32px -17px var(--color-alternative);

    font-size: 20px;
    font-weight: 600;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0 90px 0 0;
    /* border: solid yellow 1px; */
  }
  li {
    cursor: pointer;
    list-style: none;
    /* color: #05668d;
    color: #1768ac; */
    color: var(--color-secundary);

    font-size: 15px;
    font-weight: 600;
    :hover {
      filter: brightness(75%);
      transition: 0.3s;
    }
    :active {
      filter: brightness(1.6);
      transition: 0.3s;
    }
  }
  li + li {
    margin-left: 50px;
  }
`;
export default HeaderContainer;
