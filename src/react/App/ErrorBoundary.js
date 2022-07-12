import React, { Component } from "react";
import { isEnv } from "simpul";
import * as ErrorBoundaryUtil from "./ErrorBoundaryUtil";
import ErrorBoundaryStyled from "./ErrorBoundaryStyled";

class ErrorBoundaryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError = (error) => ({ error });

  componentDidUpdate() {
    if (this.state.error?.name === "ChunkLoadError") {
      ErrorBoundaryUtil.handleChunkLoadError();
    } else if (this.state.error) {
      ErrorBoundaryUtil.postErrorToServer(this.state.error);
    }
  }

  render() {
    if (this.state.error && isEnv.live) {
      return <ErrorBoundaryProduction />;
    } else if (this.state.error) {
      return <ErrorBoundaryDevelopment error={this.state.error} />;
    } else return this.props.children;
  }
}

function ErrorBoundaryProduction() {
  return (
    <ErrorBoundaryStyled id="error-page-production">
      <h1>Oops! Looks like something went wrong...</h1>
      <h2>Whatever it is, we're working on it!</h2>
    </ErrorBoundaryStyled>
  );
}

function ErrorBoundaryDevelopment({ error }) {
  return (
    <ErrorBoundaryStyled id="error-page-development">
      <h1>React Error</h1>
      <h2>{error.message}</h2>
      <pre>{error.stack}</pre>
    </ErrorBoundaryStyled>
  );
}

export default ErrorBoundaryProvider;

// https://reactjs.org/docs/error-boundaries.html
