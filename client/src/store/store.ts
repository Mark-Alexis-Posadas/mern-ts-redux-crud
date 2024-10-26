import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "../features/apiSlice";
import { productSlice } from "../features/productSlice";

const store = configureStore({
  reducer: {
    productSlice: productSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
