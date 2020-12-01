import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../setup";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import Page from "./Page";

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <ThemeProvider theme={ThemeConfig}>
        <ThemeGlobalStyle />
        <Route component={Page} />
      </ThemeProvider>
    </Switch>
  </ConnectedRouter>
);

export default App;

// To render component on specific routes,
// add component props: exact path={"/"}

// https://reactrouter.com/
// https://www.npmjs.com/package/react-router
// https://www.npmjs.com/package/connected-react-router
// https://www.npmjs.com/package/styled-components
