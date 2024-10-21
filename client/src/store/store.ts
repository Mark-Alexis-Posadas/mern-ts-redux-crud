import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice";
import fetchAllProductsSlice from "../features/fetchSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

// Create typed versions of useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
