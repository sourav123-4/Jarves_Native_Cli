import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const fakestoreApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),

  endpoints: build => ({
    listofproducts: build.query({
      query: () => ({
        url: 'products',
        method: 'get',
      }),
    }),
  }),
  reducerPath: 'fakestoreApi',
});

export const {useListofproductsQuery} = fakestoreApi;
