import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const reducer = (history) =>
  combineReducers({ router: connectRouter(history) });

export default reducer;

// https://www.npmjs.com/package/redux
// https://www.npmjs.com/package/connected-react-router
