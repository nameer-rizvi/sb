import React, { Component } from "react";
import styled from "styled-components";
import { style, isEnvProduction } from "../../shared";

const StyledDiv = styled.div`
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

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError = (error) => ({ error });

  render() {
    const { error } = this.state;
    return error ? (
      isEnvProduction ? (
        <StyledDiv>
          <h1>Oops! Looks like something went wrong...</h1>
          <h2>Whatever it is, we're working on it!</h2>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <h1>React Error</h1>
          <h2>{error.message}</h2>
          <pre>{error.stack}</pre>
        </StyledDiv>
      )
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;

// https://reactjs.org/docs/error-boundaries.html
