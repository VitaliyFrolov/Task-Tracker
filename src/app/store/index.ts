import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/features/auth';
import { userApi } from '@/entities/user/api';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddlware) => 
        getDefaultMiddlware().concat(
           authApi.middleware,
           userApi.middleware,
        ),
});