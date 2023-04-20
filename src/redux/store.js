import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import { postsApi } from "./postsSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postsApi.reducerPath]: postsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})