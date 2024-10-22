import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "../features/apiSlice";
import { addProductSlice } from "../features/addProductSlice";

const store = configureStore({
  reducer: {
    addProductSlice: addProductSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
