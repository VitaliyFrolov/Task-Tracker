import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model";

const initialState: User = {
    id: null,
    email: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
        },
    },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
