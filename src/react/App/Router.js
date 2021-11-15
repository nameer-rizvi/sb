import React from "react";
import * as ReactRouterDom from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { reactRoutes } from "../../shared";
import RouterComponent from "./RouterComponent";

// BrowserRouter
// HashRouter
// Link
// MemoryRouter
// NavLink
// Navigate
// Outlet
// Route
// Router
// Routes
// createRoutesFromChildren
// createSearchParams
// generatePath
// matchPath
// matchRoutes
// renderMatches
// resolvePath
// useHref
// useInRouterContext
// useLinkClickHandler
// useLocation
// useMatch
// useNavigate
// useNavigationType
// useOutlet
// useParams
// useResolvedPath
// useRoutes
// useSearchParams

function RouterProvider(props) {
  const params = ReactRouterDom.useParams();

  const activeConfig = reactRoutes.find((reactRoute) =>
    ReactRouterDom.matchPath(reactRoute.path, window.location.pathname)
  );

  console.log({ params, activeConfig });

  return (
    <Routes>
      {reactRoutes.map((reactRoute) => {
        const LoadableComponent = RouterComponent.Resolver[reactRoute.name];

        if (LoadableComponent) {
          const RouteProp = {};

          RouteProp.key = reactRoute.name;

          RouteProp.path = reactRoute.path;

          RouteProp.element = (
            <LoadableComponent fallback={<RouterComponent.Fallback />} />
          );

          return <Route {...RouteProp} />;
        } else {
          console.warn(`LoadableComponent not found: ${reactRoute.name}`);

          return null;
        }
      })}
    </Routes>
  );
}

export default RouterProvider;
