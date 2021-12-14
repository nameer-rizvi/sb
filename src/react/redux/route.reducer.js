import { routeInitialState, UPDATE_ROUTE } from "./route.action";
import { gtag } from "../utils";

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case UPDATE_ROUTE:
      if (state.current && state.current.pathname !== action.payload.pathname) {
        state.previous = state.current;
        state.history.push(state.current);
      }

      action.payload.full =
        action.payload.pathname + action.payload.search + action.payload.hash;

      action.payload.indexes = action.payload.pathname
        .split("/")
        .filter(Boolean);

      state.current = action.payload;

      gtag.pageView(action.payload.full); // --flow-googleTagManager-6

      return state;
    default:
      return state;
  }
}

export default routeReducer;
