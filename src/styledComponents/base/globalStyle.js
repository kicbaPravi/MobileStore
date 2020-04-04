import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62,5%;
  a {
    text-decoration: none; 
  }
}

body {
  margin: 0;
  padding: 0;
  /* background: #f3f3f3; */
  /* background: #D3D3D3; */
}
`;

export const Wrapper = styled.section`
  max-width: 70rem;
  margin: auto;
  display: grid;
`;
