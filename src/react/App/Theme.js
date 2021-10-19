import { style, elementId } from "../../shared";
import { createGlobalStyle } from "styled-components";

const { backgroundColor, color, fontFamily } = style;

export const ThemeConfig = {
  font: [fontFamily],
  color: [backgroundColor, color],
};

export const ThemeGlobalStyle = createGlobalStyle`
  ${style.base}

  #${elementId.react} {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    width: 100%;
    max-width: 1280px;
  }
`;

// https://www.npmjs.com/package/styled-components
