import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi';
import { authApi } from '../services/authApi';
import authReducer from '../services/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productApi.middleware, authApi.middleware),
});
