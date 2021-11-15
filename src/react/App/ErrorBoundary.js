import React, { Component } from "react";
import ErrorBoundaryStyled from "./ErrorBoundaryStyled";
import { isEnv } from "simpul";
import axios from "axios";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError = (error) => ({ error });

  render() {
    const { error } = this.state;

    if (error && isEnv.live)
      axios.post("/error", {
        error: {
          pathname: window.location.pathname + window.location.search,
          message: error.message,
          stack: error.stack,
        },
      });

    return error ? (
      isEnv.live ? (
        <ErrorBoundaryStyled>
          <h1>Oops! Looks like something went wrong...</h1>
          <h2>Whatever it is, we're working on it!</h2>
        </ErrorBoundaryStyled>
      ) : (
        <ErrorBoundaryStyled>
          <h1>React Error</h1>
          <h2>{error.message}</h2>
          <pre>{error.stack}</pre>
        </ErrorBoundaryStyled>
      )
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;

// https://reactjs.org/docs/error-boundaries.html
