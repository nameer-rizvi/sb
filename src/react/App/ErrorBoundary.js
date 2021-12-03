import React, { Component } from "react";
import ErrorBoundaryComponent from "./ErrorBoundaryComponent";

class ErrorBoundaryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError = (error) => ({ error });

  render() {
    const { error } = this.state;

    return error ? (
      <ErrorBoundaryComponent error={error} />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundaryProvider;

// https://reactjs.org/docs/error-boundaries.html
