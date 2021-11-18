export const initialState = { history: [] };

export const ADD_NEW_ROUTE = "ADD_NEW_ROUTE";

export const UPDATE_CURRENT_ROUTE = "UPDATE_CURRENT_ROUTE";

export const addNewRoute = (payload) => ({
  type: ADD_NEW_ROUTE,
  payload,
});

export const updateCurrentRoute = (payload) => ({
  type: UPDATE_CURRENT_ROUTE,
  payload,
});
