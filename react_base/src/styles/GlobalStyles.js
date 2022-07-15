import styled, { createGlobalStyle } from 'styled-components';

import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
`;
