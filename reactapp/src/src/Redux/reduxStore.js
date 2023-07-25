import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Define initial state
const initialState = {
  user: null,
  isLoggedIn: false,
};

// Define reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
