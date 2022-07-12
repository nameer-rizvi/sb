import React, { useEffect } from "react";
import { URLQuery, request } from "../util";
import { isBooleanAny, isEnv } from "simpul";
import ErrorBoundaryComponentStyled from "./ErrorBoundaryComponentStyled";

function ErrorBoundaryComponent({ error }) {
  useEffect(() => {
    if (isEnv.live) {
      if (error.name === "ChunkLoadError") {
        const params = URLQuery.get();
        if (!isBooleanAny(params.reloaded)) {
          params.reloaded = true;
          window.location =
            window.location.pathname + URLQuery.generate(params);
        }
      } else {
        request.post("/error", {
          data: {
            error: {
              pathname: window.location.pathname + window.location.search,
              message: error.message,
              stack: error.stack,
            },
          },
        });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isEnv.live ? (
    <ErrorBoundaryComponentStyled id="error-page-production">
      <h1>Oops! Looks like something went wrong...</h1>
      <h2>Whatever it is, we're working on it!</h2>
    </ErrorBoundaryComponentStyled>
  ) : (
    <ErrorBoundaryComponentStyled id="error-page-development">
      <h1>React Error</h1>
      <h2>{error.message}</h2>
      <pre>{error.stack}</pre>
    </ErrorBoundaryComponentStyled>
  );
}

export default ErrorBoundaryComponent;
