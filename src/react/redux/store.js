import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise-middleware";
import rootReducer from "./store.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = applyMiddleware(reduxThunk, reduxPromise);

export const store = createStore(rootReducer, composeWithDevTools(middlewares));

// https://www.npmjs.com/package/redux
// https://www.npmjs.com/package/redux-thunk
// https://www.npmjs.com/package/redux-promise-middleware
// https://www.npmjs.com/package/redux-devtools-extension
