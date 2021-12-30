import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
  }

  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
`;
export const Wrapper = styled.div`
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-right: 10pxl;
  }
`;
