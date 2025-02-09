import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => 'user',
        })
    }),
});

export const { 
    useGetUserDataQuery,
} = userApi;