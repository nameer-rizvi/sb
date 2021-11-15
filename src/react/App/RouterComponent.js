import loadable from "@loadable/component";

const RouterComponentFallback = () => "Loading...";

const RouterComponentResolver = {
  Home: loadable(() => import("./Home")),
  Post: loadable(() => import("./Post")),
  NotFound: loadable(() => import("./NotFound")),
};

const RouterComponent = {
  Fallback: RouterComponentFallback,
  Resolver: RouterComponentResolver,
};

export default RouterComponent;
