import loadable from "@loadable/component";

const RouterLoadableComponent = {
  Home: loadable(() => import("../Home")),
  Content: loadable(() => import("../Content")),
  NotFound: loadable(() => import("../NotFound")),
};

export default RouterLoadableComponent;
