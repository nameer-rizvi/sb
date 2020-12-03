import React, { Component } from "react";
import styled from "styled-components";
import { isEnvProduction } from "../../shared";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;
  word-break: break-word;
`;

const StyledH1 = styled.h1`
  font-size: revert;
  margin-bottom: 30px;
`;

const StyledH2 = styled.h2`
  font-size: revert;
  margin-bottom: 15px;
`;

const StyledPre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError = (error) => ({ error });

  render() {
    const { error } = this.state;
    return error && !isEnvProduction ? (
      <StyledDiv>
        <StyledH1>React Error</StyledH1>
        <StyledH2>{error.message}</StyledH2>
        <StyledPre>{error.stack}</StyledPre>
      </StyledDiv>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
