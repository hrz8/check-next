import { createBlog, getAllBlogs } from "@/services/blog/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        posts: [],
        isLoading: true,
    },
};

export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', getAllBlogs);
export const writeBlog = createAsyncThunk('blog/writeBlog', createBlog);

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlog: (state, { payload }) => {
            state.value.posts = payload.posts;
            state.value.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        // fetch
        builder.addCase(fetchBlogs.pending, (state) => {
            state.value.isLoading = true;
        });
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.value.isLoading = false;
            state.value.posts = action.payload;
        });
        builder.addCase(fetchBlogs.rejected, (state, action) => {
            state.value.isLoading = false;
            // state.error = action.error.message
        });

        // read
        // builder.addCase(fetchBlogs.pending, (state) => {
        //     state.value.isLoading = true;
        // });
        // builder.addCase(fetchBlogs.fulfilled, (state, action) => {
        //     state.value.isLoading = false;
        //     state.value.posts = action.payload;
        // });
        // builder.addCase(fetchBlogs.rejected, (state, action) => {
        //     state.value.isLoading = false;
        //     // state.error = action.error.message
        // });
    }
});

export const { setBlog } = blogSlice.actions;
