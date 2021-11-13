import { reactRoutes as RouteConfigs } from "../../../shared";
import { pathname, URLQuery } from "../../util";

function RouterRouteConfig(locationPathname) {
  const locationPathnameSplits = pathname.split(locationPathname);

  if (!locationPathnameSplits.length) {
    const HomeRouteConfig = RouteConfigs.find(({ name }) => name === "Home");

    HomeRouteConfig.params = URLQuery.get();

    return HomeRouteConfig;
  } else {
    let config, redirect;

    for (let RouteConfig of RouteConfigs)
      if (RouteConfig.pathname) {
        let match;

        let routeConfigPathnameSplits = pathname.split(RouteConfig.pathname);

        if (RouteConfig.redirectFroms)
          for (let redirectFrom of RouteConfig.redirectFroms) {
            // let redirectFromPathnameSplits = pathname.split(redirectFrom);
            // match = pathname.match(
            //   locationPathnameSplits,
            //   redirectFromPathnameSplits
            // );
            // if (match.found) {
            //   redirect = pathname.join(routeConfigPathnameSplits, match.tempParams);
            //   break;
            // }
          }

        // match = pathname.match(locationPathnameSplits, routeConfigPathnameSplits);
        // if (match.found) {
        //   if (RouteConfig.redirectTo) {
        //     let redirectToSplits = pathname.split(RouteConfig.redirectTo);
        //     redirect = pathname.join(redirectToSplits, match.tempParams);
        //     break;
        //   } else {
        //     config = RouteConfig;
        //     params = match.tempParams;
        //     break;
        //   }
        // }
      }

    return config || redirect
      ? { ...config, redirect, params: { ...params, ...URLQuery.get() } }
      : RouteConfigs.find(({ name }) => name === "NotFound");
  }
}

export default RouterRouteConfig;
