import { initialState, UPDATE_ROUTE } from "./route.action";

function routeReducer(state = initialState, action) {
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

      return state;
    default:
      return state;
  }
}

export default routeReducer;
