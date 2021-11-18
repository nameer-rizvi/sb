import { combineReducers } from "redux";
import routeReducer from "./route.reducer";

const RootReducer = combineReducers({ route: routeReducer });

export default RootReducer;

// https://www.npmjs.com/package/redux
