import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  auth: userReducer,
});

const getUserDetails = () => {
  const userDetails = localStorage.getItem("userDetails");
  if (userDetails && userDetails !== "undefined" && userDetails !== "null") {
    try {
      return JSON.parse(userDetails);
    } catch (e) {
      console.error("Error parsing user details from localStorage", e);
      return null;
    }
  }
  return null;
};

const preloadedState = {
  auth: {
    user: getUserDetails(),
    token: localStorage.getItem("token") || null,
    errors: null,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
