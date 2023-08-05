import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        posts: [],
        isLoading: true,
    },
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlog: (state, { payload }) => {
            state.value.posts = payload.posts;
            state.value.isLoading = false;
        },
    }
});

export const { setBlog } = blogSlice.actions;
