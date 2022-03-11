import styled from "styled-components";

const DisplayCardSectionStyles = styled.section`
  width: 220px;
  margin-top: 145px;
  @media (min-width: 440px) {
    width: 440px;
  }
  @media (min-width: 660px) {
    width: 660px;
    margin-top: 100px;
  }

  @media (min-width: 880px) {
    width: 880px;
  }
  @media (min-width: 1100px) {
    width: 1100px;
  }
  @media (min-width: 1500px) {
    width: 1200px;
  }
  @media (min-width: 1600px) {
    width: 1300px;
  }
  @media (min-width: 1700px) {
    width: 1400px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export default DisplayCardSectionStyles;
