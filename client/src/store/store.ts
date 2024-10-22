import { configureStore } from "@reduxjs/toolkit";

import fetchAllProductsSlice from "../features/apiSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [fetchAllProductsSlice.reducerPath]: fetchAllProductsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchAllProductsSlice.middleware),
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
