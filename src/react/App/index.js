// --starterKit-flag [basically everything in this folder... Let's get busy!]

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "../redux";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import { Route } from "react-router-dom";
import RouterProvider from "./Router";

const App = () => (
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={ThemeConfig}>
          <ThemeGlobalStyle />
          <Route path="*" component={RouterProvider} />
        </ThemeProvider>
      </ConnectedRouter>
    </ReduxProvider>
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
