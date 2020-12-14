import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise-middleware";
import createRootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const RouterHistory = routerMiddleware(history);

const middlewares = applyMiddleware(RouterHistory, ReduxThunk, ReduxPromise);

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(middlewares)
);

// https://www.npmjs.com/package/history
// https://www.npmjs.com/package/connected-react-router
// https://www.npmjs.com/package/redux
// https://www.npmjs.com/package/redux-thunk
// https://www.npmjs.com/package/redux-promise-middleware
// https://www.npmjs.com/package/redux-devtools-extension
