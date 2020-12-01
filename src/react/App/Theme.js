import { browser } from "../../shared";
import { createGlobalStyle } from "styled-components";

const { background_color, theme_color, fontFamily } = browser.props;

export const ThemeConfig = {
  font: [fontFamily],
  color: [background_color, theme_color],
};

export const ThemeGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    display: flex;
    min-height: 100vh;
    margin: auto;
    background-color: ${({ theme }) => theme.color[0]};
    color: ${({ theme }) => theme.color[1]};
    font-family: ${({ theme }) => theme.font[0]};
  }

  #react-application {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }
`;

// https://www.npmjs.com/package/styled-components
