import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins";
  background-color: #edf6f9;
    }
    main {
    display: flex;
    justify-content: center;
  }
    button{
        cursor: pointer;
        :hover {
        filter: brightness(75%);
        transition: 0.3s;
        }
        :active {
        filter: brightness(1.6);
        transition: 0.3s;
    }
    }
    :root {
        --color-primary: #609cba;
        --color-secundary: #f45b69;
        --color-button: #1768ac;
        --color-alternative: #ff0054;

    }

`;
export default GlobalStyle;
