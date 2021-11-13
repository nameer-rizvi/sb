import React, { useEffect } from "react";
import { history } from "../../redux";
import RouterRouteConfig from "./RouterRouteConfig";
import RouterLoadableComponent from "./RouterLoadableComponent";
import RouterLoadableComponentFallback from "./RouterLoadableComponentFallback";

function LoadableRoutes(props) {
  const RouteConfig = RouterRouteConfig(props.location.pathname);

  useEffect(() => {
    if (RouteConfig.redirect) history.push(RouteConfig.redirect);
  }, [RouteConfig.redirect]);

  const LoadableComponent = RouterLoadableComponent[RouteConfig.name];

  return LoadableComponent ? (
    <LoadableComponent
      fallback={<RouterLoadableComponentFallback />}
      RouteConfig={RouteConfig}
      {...props}
    />
  ) : (
    `<LoadableComponent /> not found for Route Config: ${RouteConfig.name}.`
  );
}

export default LoadableRoutes;

// https://loadable-components.com/
