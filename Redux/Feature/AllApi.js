
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const AllApi = createApi({
  reducerPath: 'reqestApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `/posts`,
    }),
    getPostByid: builder.query({
      query: (id) =>`/posts/${id}`,
    }),
  }),
})
export const { useGetPostQuery, useGetPostByidQuery } = AllApi