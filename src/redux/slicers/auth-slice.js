import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isLoggedIn: false,
        username: null,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            // console.log(username);
            state.value.isLoggedIn = true;
            state.value.username = payload;
        },
        logout: (state) => {
            state.value.isLoggedIn = false;
            state.value.username = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
