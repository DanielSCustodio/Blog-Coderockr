import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    background: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
    color: #2D2D2D;
    font-family: 'Rubik', sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit
  }

  body, input, textarea, select, bottom {
    font: 400 1.5rem "Rubik";
    line-height: 2.125rem;
  }

  h1, h2 {
    font-size: 2.25rem;
    line-height: 2.688rem;
  }

  button {
    cursor: pointer;
  }


`;
