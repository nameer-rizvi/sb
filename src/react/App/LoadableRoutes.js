import React from "react";
import loadable from "@loadable/component";
import { Route } from "react-router";

const Loader = () => "Loading...";

const LoadableRoutes = () =>
  [
    {
      component: loadable(() => import("./Page.js"), {
        fallback: <Loader />,
      }),
    },
  ].map((LoadableRoute, index) => <Route key={index} {...LoadableRoute} />);

export default LoadableRoutes;

// https://loadable-components.com/
