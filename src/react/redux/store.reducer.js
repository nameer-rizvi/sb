import { combineReducers } from "redux";
import routeReducer from "./route.reducer";

const rootReducer = combineReducers({ route: routeReducer });

export default rootReducer;

// https://www.npmjs.com/package/redux
