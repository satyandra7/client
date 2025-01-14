// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/user/' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
        query: (user) =>{
            console.log(user);
            return {
                url: 'register',
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        }
    }),
    loginUser: builder.mutation({
        query: (user) =>{
            console.log(user);
            return {
                url: 'login',
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:'include' 
            }
        }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateUserMutation, useLoginUserMutation } = authApi