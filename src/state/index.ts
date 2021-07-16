import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./home";
import userReducer from "./user";

export const rootReducer = {
  counter: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
