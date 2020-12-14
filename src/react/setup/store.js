import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise-middleware";
import createRootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const middlewares = applyMiddleware(
  routerMiddleware(history),
  ReduxThunk,
  ReduxPromise
);

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(middlewares)
);

// https://www.npmjs.com/package/history
// https://www.npmjs.com/package/redux
// https://www.npmjs.com/package/connected-react-router
// https://www.npmjs.com/package/redux-thunk
// https://www.npmjs.com/package/redux-promise-middleware
// https://www.npmjs.com/package/redux-devtools-extension
