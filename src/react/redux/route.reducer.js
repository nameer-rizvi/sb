import { initialState, UPDATE_ROUTE } from "./route.action";

function routeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ROUTE:
      const updateHistory =
        state.current && state.current.pathname !== action.payload.pathname;

      if (updateHistory) {
        state.previous = state.current;
        state.history.push(state.current);
      }

      state.current = action.payload;

      return state;
    default:
      return state;
  }
}

export default routeReducer;
