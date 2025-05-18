import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const billsApi = createApi({
  reducerPath: 'billsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://urgent2kay.onrender.com/api/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
   
    createBill: builder.mutation({
      query: (body) => ({
        url: 'bills/',
        method: 'POST',
        body,
      }),
    }),


    getUserBills: builder.query({
      query: () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        const userId = userInfo._id;
        return `bills/user/${userId}`;
      },
    }),
  }),
});

export const { useCreateBillMutation, useGetUserBillsQuery } = billsApi;
