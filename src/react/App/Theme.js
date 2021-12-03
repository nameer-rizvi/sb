import { style, elementId } from "../../shared";
import { createGlobalStyle } from "styled-components";

export const ThemeConfig = {
  font: [style.fontFamily],
  color: [style.backgroundColor, style.color],
};

export const ThemeGlobalStyle = createGlobalStyle`
  ${style.base}

  body {
    align-items: center;
  }

  #${elementId.react} {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    max-width: 1280px;
    padding: 0 30px;
  }

  main {
    display: flex;
    flex-grow: 1;
    padding-bottom: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  // * {
  //   margin: 0;
  //   padding: 0;
  //   border: 0;
  //   background: unset;
  //   color: inherit;
  //   font-size: inherit;
  //   font-family: inherit;
  //   word-break: break-word;
  //   -webkit-user-select: none;
  //   -moz-user-select: none;
  //   -ms-user-select: none;
  // }
`;

// https://www.npmjs.com/package/styled-components
