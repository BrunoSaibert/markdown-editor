import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  html, body, #root {
    min-height: 100%;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
