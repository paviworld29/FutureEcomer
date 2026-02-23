import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/baseUrl';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('apikey', 'pixel');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
  query: () => {
    console.log('API call triggered'); // 👈 will show in Metro only when API is called
    return {
      url: 'task_api.php',
      method: 'GET',
    };
  },
}),
  }),
});

export const { useGetAllProductsQuery } = productApi;