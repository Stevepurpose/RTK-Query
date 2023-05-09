import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { postsApi } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]:postsApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(postsApi.middleware)
});
