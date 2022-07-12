import React, { Component } from "react";
import ErrorBoundaryComponent from "./ErrorBoundaryComponent";

class ErrorBoundaryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError = (error) => ({ error });

  render() {
    if (this.state.error) {
      return <ErrorBoundaryComponent error={this.state.error} />;
    } else return this.props.children;
  }
}

export default ErrorBoundaryProvider;

// https://reactjs.org/docs/error-boundaries.html
