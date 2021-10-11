import React, { Component } from "react";
import styled from "styled-components";
import { style } from "../../shared";
import axios from "axios";
import { isEnv } from "simpul";

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

    if (error)
      axios.post("/error", {
        error: {
          pathname: window.location.pathname + window.location.search,
          message: error.message,
          stack: error.stack,
        },
      });

    // if (error && error.name === "ChunkLoadError") window.location.reload();

    return error ? (
      isEnv.live ? (
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
