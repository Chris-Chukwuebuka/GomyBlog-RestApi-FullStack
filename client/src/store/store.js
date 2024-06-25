import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "../lib/redux/userSlice";
import { blogApi } from "../lib/apis/BlogApis";

// Create a Redux store with the Redux Toolkit configureStore function
export const store = configureStore({
  reducer: {
    // Add the blogApi reducer to the Redux store
    [blogApi.reducerPath]: blogApi.reducer,

    // Add the userSlice reducer to the Redux store
    userState: userSlice,
  },
  // Enable the Redux DevTools extension for the browser to view the Redux store only in development
  devTools: process.env.NODE_ENV === "development",

  // Add the middleware to the Redux store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),

});

setupListeners(store.dispatch)