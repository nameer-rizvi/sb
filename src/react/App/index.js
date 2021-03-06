import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "../redux";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import { Switch } from "react-router-dom";
import LoadableRoutes from "./LoadableRoutes";

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={ThemeConfig}>
          <ThemeGlobalStyle />
          <Switch>
            <LoadableRoutes />
          </Switch>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>
);

export default App;

// To render component on specific routes,
// add component props: exact path={"/"}
//
// https://www.npmjs.com/package/react-redux
// https://www.npmjs.com/package/connected-react-router
// https://www.npmjs.com/package/styled-components
// https://www.npmjs.com/package/react-router-dom
