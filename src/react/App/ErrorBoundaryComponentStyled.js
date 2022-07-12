import styled from "styled-components";
import { CONSTANT } from "../../shared";

// Since <ErrorBoundary /> is called outside <ThemeProvider />,
//  it must manually import the style from the shared folder.

const ErrorBoundaryComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  font-family: ${CONSTANT.STYLE.FONT_FAMILY};
  color: ${CONSTANT.STYLE.COLOR};

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

export default ErrorBoundaryComponentStyled;
