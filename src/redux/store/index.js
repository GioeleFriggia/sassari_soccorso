import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  auth: userReducer, // This could include more reducers as your app grows
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
