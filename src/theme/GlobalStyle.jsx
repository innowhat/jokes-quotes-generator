import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        font-size: 18px;
        font-family: 'Work Sans', sans-serif;
        font-weight: 300; 
        background:#282c34;
    }
`;

export default GlobalStyle;
