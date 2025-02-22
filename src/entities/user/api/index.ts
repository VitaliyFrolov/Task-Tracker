import { 
    createApi, 
    fetchBaseQuery, 
} from '@reduxjs/toolkit/query/react';
import { setUser } from '../store';
import { interceptor } from '@/shared/api';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        };
        return headers;
    },
});

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: interceptor(baseQuery),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => 'auth/profile',
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));    
                } catch (error) {
                    console.error('Ошибка загрузки данных пользователя', error);
                }
            },
        }),
    }),
});

export const { useGetUserDataQuery } = userApi;
