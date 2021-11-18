import {
  initialState,
  ADD_NEW_ROUTE,
  UPDATE_CURRENT_ROUTE,
} from "./route.action";

function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ROUTE:
      if (state.current) {
        state.previous = state.current;
        state.history.push(state.current);
      }
      state.current = action.payload;
      return state;
    case UPDATE_CURRENT_ROUTE:
      state.current = { ...state.current, ...action.payload };
      return state;
    default:
      return state;
  }
}

export default routeReducer;
