// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/blog/' }),
  endpoints: (builder) => ({
    createBlog: builder.mutation({
        query: (blog) =>{
            console.log(user);
            return {
                url: 'create',
                method: 'POST',
                body: blog,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }
    })
  }),
  endpoints: (builder) => ({
    fetchBlog: builder.query({
        query: (searchParams) =>{
            console.log(searchParams);
            return {
                url: 'get-details',
                method: 'GET',
                params: searchParams,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateBlogMutation, useFetchBlogQuery } = blogApi