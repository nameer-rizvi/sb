import _public from "../../public";
import { createGlobalStyle } from "styled-components";

const { backgroundColor, color, fontFamily } = _public.props.style;

export const ThemeConfig = {
  font: [fontFamily],
  color: [backgroundColor, color],
};

export const ThemeGlobalStyle = createGlobalStyle`
  ${_public.props.style.base}

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
