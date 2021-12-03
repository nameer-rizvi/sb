import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { reactRoutes } from "../../shared";
import RouteProviderComponent from "./RouteProviderComponent";

const RouteProvider = () => (
  <Routes>
    {reactRoutes.map((reactRoute) => {
      const reactRouteStore = [];

      if (reactRoute.path)
        reactRouteStore.push(
          <Route
            path={reactRoute.path}
            element={<RouteProviderComponent {...reactRoute} />}
          />
        );

      if (reactRoute.paths)
        for (let reactRoutePath of reactRoute.paths)
          reactRouteStore.push(
            <Route
              path={reactRoutePath}
              element={<RouteProviderComponent {...reactRoute} />}
            />
          );

      if (reactRoute.redirects)
        for (let reactRouteRedirect of reactRoute.redirects) {
          let navigateTo = reactRoute.paths
            ? reactRoute.paths[0]
            : reactRoute.path;
          reactRouteStore.push(
            <Route
              path={reactRouteRedirect}
              element={<Navigate replace to={navigateTo} />}
            />
          );
        }

      return reactRouteStore.map((reactRouteItem) => reactRouteItem);
    })}
  </Routes>
);

export default RouteProvider;

// https://www.npmjs.com/package/react-router-dom
