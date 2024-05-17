// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  auth: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: {
      user: JSON.parse(localStorage.getItem("userDetails")),
      token: localStorage.getItem("token"),
      errors: null,
    },
  },
});

export default store;
