import React from "react";
import loadable from "@loadable/component";
import { Route } from "react-router-dom";

const Loader = () => "Loading...";

const LoadableRoutes = () =>
  [
    {
      component: loadable(() => import("./HomePage.js"), {
        fallback: <Loader />,
      }),
    },
  ].map((LoadableRoute, index) => <Route key={index} {...LoadableRoute} />);

export default LoadableRoutes;

// https://loadable-components.com/
