import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 120px;
  margin-bottom: 25px;
  background-color: var(--color-primary);
  box-shadow: 0 4px 34px -12px #343a40;
  padding: 10px 0 0 0;
  box-sizing: border-box;
  @media (min-width: 660px) {
    height: 75px;
    padding: 0;
  }
  .header-div-parent {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 200px;
    align-items: center;
    @media (min-width: 660px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 640px;
    }

    @media (min-width: 880px) {
      width: 880px;
    }
    @media (min-width: 1100px) {
      width: 1080px;
    }
    @media (min-width: 1500px) {
      width: 1180px;
    }
    @media (min-width: 1600px) {
      width: 1280px;
    }
    @media (min-width: 1700px) {
      width: 1380px;
    }
  }
  .header-div-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 27px;
    border-radius: 4px;
    padding: 8px;
    color: #ffffff;
    background-color: var(--color-alternative);
    box-shadow: 0 4px 32px -17px var(--color-alternative);

    font-size: 20px;
    font-weight: 600;
    span {
      font-size: 16px;
      font-weight: 800;
      font-family: "Poppins";
    }
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin-left: 3px;
    cursor: pointer;
    list-style: none;
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
    margin-left: 40px;
    @media (max-width: 310px) {
      margin-left: 20px;
    }
  }
  .header-icons {
    margin-right: 3px;
  }
`;
export default HeaderContainer;
