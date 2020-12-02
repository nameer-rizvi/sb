import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../setup";
import { Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import LoadableRoutes from "./LoadableRoutes";

const App = () => (
  <ErrorBoundary>
    <ConnectedRouter history={history}>
      <Switch>
        <ThemeProvider theme={ThemeConfig}>
          <ThemeGlobalStyle />
          <LoadableRoutes />
        </ThemeProvider>
      </Switch>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default App;

// To render component on specific routes,
// add component props: exact path={"/"}
//
// https://reactrouter.com/
// https://www.npmjs.com/package/react-router
// https://www.npmjs.com/package/connected-react-router
// https://www.npmjs.com/package/styled-components
