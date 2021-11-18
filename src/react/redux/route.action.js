export const initialState = { history: [] };

export const UPDATE_ROUTE = "UPDATE_ROUTE";

export const updateRoute = (payload) => ({ type: UPDATE_ROUTE, payload });
