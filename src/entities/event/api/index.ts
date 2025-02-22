import { interceptor } from '@/shared/api';
import { 
    createApi, 
    fetchBaseQuery, 
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/events/',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: interceptor(baseQuery),
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => 'list'
        }),
    }),
});

export const { useGetEventsQuery } = eventApi;