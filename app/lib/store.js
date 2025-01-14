import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import { blogApi } from './services/blog'


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,  blogApi.middleware),
 })


setupListeners(store.dispatch)