import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    min-height: 100vh;
    background: url(${background}) center no-repeat;
    background-size: cover;
    /* background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%); */
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  /* Tablet */
  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  /* Mobile */
  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }
`;
