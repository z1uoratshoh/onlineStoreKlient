import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProducts = createApi({
  reducerPath: "getProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://65.108.148.136:8072/" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({query: () => ("Product/get-products"), providesTags: ["todos"],
    }),
  }),
});

export const { useGetTodosQuery } = getProducts;
