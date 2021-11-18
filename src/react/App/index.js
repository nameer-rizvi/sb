// --starterKit-flag [basically everything in this folder... Let's get busy!]

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { reactRoutes } from "../../shared";
import RouteProvider from "./Route";

const App = () => (
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <ThemeProvider theme={ThemeConfig}>
        <ThemeGlobalStyle />
        <BrowserRouter>
          <Routes>
            {reactRoutes.map((reactRoute) => {
              if (reactRoute.name) {
                const reactRouteStore = [];

                reactRouteStore.push(
                  <Route
                    key={reactRoute.name}
                    path={reactRoute.path}
                    element={<RouteProvider {...reactRoute} />}
                  />
                );

                if (reactRoute.redirects)
                  for (let redirect of reactRoute.redirects)
                    reactRouteStore.push(
                      <Route
                        path={redirect}
                        element={<Navigate replace to={reactRoute.path} />}
                      />
                    );

                return reactRouteStore.map((reactRouteItem) => reactRouteItem);
              } else return null;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  </ErrorBoundary>
);

export default App;

// https://www.npmjs.com/package/react-redux
// https://www.npmjs.com/package/styled-components
// https://www.npmjs.com/package/react-router-dom
