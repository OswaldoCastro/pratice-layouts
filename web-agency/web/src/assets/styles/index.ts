import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-weight: normal;
    font-size: 16px;
    font-size: 1rem;
    color: var(--white);
    background: var(--primary);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;

    font-family: Arial, Helvetica, sans-serif;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  :root {
    --black: #000;
    --white: #FFF;
    --red: #FF0000;;
    --primary: #3644AF;
    --secondary: rgba(255,255,255,0.05);
    --tertiary: rgba(255,255,255,0.06);
    --quaternary: #20292f;
  }
`;

export default GlobalStyles;
