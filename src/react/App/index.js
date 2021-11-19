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
              const reactRouteStore = [];

              if (reactRoute.path)
                reactRouteStore.push(
                  <Route
                    path={reactRoute.path}
                    element={<RouteComponent {...reactRoute} />}
                  />
                );

              if (reactRoute.paths)
                for (let reactRoutePath of reactRoute.paths)
                  reactRouteStore.push(
                    <Route
                      path={reactRoutePath}
                      element={<RouteComponent {...reactRoute} />}
                    />
                  );

              if (reactRoute.redirects)
                for (let reactRouteRedirect of reactRoute.redirects)
                  reactRouteStore.push(
                    <Route
                      path={reactRouteRedirect}
                      element={<Navigate replace to={reactRoute.path} />}
                    />
                  );

              return reactRouteStore.map((reactRouteItem) => reactRouteItem);
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
