import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
