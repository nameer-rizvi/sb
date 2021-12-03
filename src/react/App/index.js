// --starterKit-flag [basically everything in this folder... Let's get busy!]

import React from "react";
import ErrorBoundaryProvider from "./ErrorBoundary";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import RouteProvider from "./RouteProvider";

const App = () => (
  <ErrorBoundaryProvider>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={ThemeConfig}>
          <ThemeGlobalStyle />
          <RouteProvider />
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </ErrorBoundaryProvider>
);

export default App;

// https://www.npmjs.com/package/react-redux
// https://www.npmjs.com/package/styled-components
// https://www.npmjs.com/package/react-router-dom
