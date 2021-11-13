import styled from "styled-components";
import { style } from "../../../shared";

// Since <ErrorBoundary /> is called outside <ThemeProvider />,
//   it must manually import the style from the shared folder.

const ErrorBoundaryStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  font-family: ${style.fontFamily};
  color: ${style.color};

  h1 {
    margin-bottom: 30px;
  }

  h2 {
    margin-bottom: 15px;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export default ErrorBoundaryStyled;
