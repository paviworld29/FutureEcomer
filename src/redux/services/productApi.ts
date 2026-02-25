import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/baseUrl';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set('apikey', 'pixel'); // globally added
      return headers;
    },
  }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => ({
        url: 'task_api.php',
        method: 'GET',
      }),
    }),
    getProduct: builder.query({
      query: (productId: string | number) => ({
        url: 'task_api.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        body: `product_id=${productId}`,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApi;