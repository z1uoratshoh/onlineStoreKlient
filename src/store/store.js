import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getproducts } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    [getproducts.reducerPath]: getproducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getproducts.middleware),
});

setupListeners(store.dispatch);