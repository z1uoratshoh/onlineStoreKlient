import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getProducts } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    [getProducts.reducerPath]: getProducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProducts.middleware),
});

setupListeners(store.dispatch);