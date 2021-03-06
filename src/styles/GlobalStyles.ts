import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "GT-Walsheim";
    src: url("/fonts/GT-Walsheim-Regular-Trial");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: "GT-Walsheim", sans-serif;
  }

  a {
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default GlobalStyles;
