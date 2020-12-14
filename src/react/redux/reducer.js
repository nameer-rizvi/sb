import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({ router: connectRouter(history) });

export default createRootReducer;

// https://www.npmjs.com/package/redux
// https://www.npmjs.com/package/connected-react-router
