import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL;

// how to handle enviromental variables in REACT JS
if (process.env.NODE_ENV === "production") {
  BASE_URL = process.env.REACT_APP_PROD_BASE_URL;
} else {
  BASE_URL = process.env.REACT_APP_API_DEV_BASE_URL;
}
// 

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllBlogs: builder.mutation({
      query: (pageNum) => ({
        url: `blogs?page=${pageNum}&limit=5`,
        method: "GET",
      }),
    }),

    getSingleBlogByTitle: builder.mutation({
      query: (title) => ({
        url: `blogs/${title}`,
        method: "GET",
      }),
    }),

    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "blogs",
        method: "POST",
        body: blogData,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsMutation,
  useGetSingleBlogByTitleMutation,
} = blogApi;