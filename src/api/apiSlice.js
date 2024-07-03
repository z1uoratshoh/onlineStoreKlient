import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getproducts = createApi({
   reducerPath: "getproducts",
   baseQuery: fetchBaseQuery({ baseUrl: "http://65.108.148.136:8072/" }),
   tagTypes: ["todos"],

   endpoints: (builder) => ({
    getTodos: builder.query({
      query: (search) => (search ? "Product/get-products?ProductName=" + search : "get-products"),
      providesTags: ["todos"],
    }), 

    // editTodo: builder.mutation({
    //   query: (formData) => ({
    //     url: "update-to-do",
    //     method: "PUT",
    //     body: formData
    //   }),
    //   invalidatesTags: ["todos"],
    // }),

    // postTodo: builder.mutation({
    //   query: (formData) => ({
    //     url: "add-to-do",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["todos"],
    // }),

    // check: builder.mutation({
    //   query: (id) => ({
    //     url: is-completed?id=${id},
    //     method: "PUT",
    //   }),
    //   invalidatesTags: ["todos"],
    // }),

    // delete: builder.mutation({
    //   query: (id) => ({
    //     url: delete-to-do?id=${id},
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["todos"],
    // }),

    // getTodosById: builder.query({
    //   query: (id) => get-to-do-by-id?id= ${id},
    //   providesTags: ["todos"],
    // }),

    // deleteImage: builder.mutation({
    //   query: (id) => ({
    //     url: delete-to-do-image?imageId=${id},
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["todos"],
    // }),
    
    // addImage: builder.mutation({
    //   query: (formData) => ({
    //     url: "add-to-do-images",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["todos"],
    // }),
   }),
 });

export const { useGetTodosQuery, useCheckMutation, useDeleteMutation, usePostTodoMutation, useEditTodoMutation, useGetTodosByIdQuery, useDeleteImageMutation, useAddImageMutation } = getproducts;