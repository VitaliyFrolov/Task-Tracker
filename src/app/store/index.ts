import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/features/auth';
import { userApi, userReducer } from '@/entities/user';
import { eventApi } from '@/entities/event';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [eventApi.reducerPath]: eventApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
           authApi.middleware,
           userApi.middleware,
           eventApi.middleware,
        ),
});