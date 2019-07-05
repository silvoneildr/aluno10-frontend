import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const ErrorStyle = css`
  border: 2px solid ${props => props.theme.error};
`;

const GlobalStyle = createGlobalStyle`

  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 14px;
    color: white;
  }

  input {
    border-radius: 3px;
    border: 1px;
    height: 50px;
    padding: 0 15px;
    width: 100%;
  }

  input.error {
    ${ErrorStyle}
  }

`;

export default GlobalStyle;
