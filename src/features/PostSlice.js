import { createSlice } from '@reduxjs/toolkit';
import { createPost, getPost, getPosts } from './actions/PostAction';

const initialState = {
    postUpdated: false,
    postLoaded: false,
    postError: null,
    postLoading: false,
    postCreated: false,
    posts: null,
    post: null,
    newPost: null
}
const postSlice = createSlice({
    name: "postsData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state, action) => {
            state.postLoading = true;
            state.postError = null;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.postLoading = false;
            state.postLoaded = true;
            state.posts = action.payload;
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.postLoading = false;
            state.postLoaded = false;
            state.postError = action.payload;
        })
        .addCase(getPost.pending, (state, action) => {
            state.postLoading = true;
            state.postError = null;
        })
        .addCase(getPost.fulfilled, (state, action) => {
            state.postLoading = false;
            state.postLoaded = true;
            state.post = action.payload;
        })
        .addCase(getPost.rejected, (state, action) => {
            state.postLoading = false;
            state.postLoaded = false;
            state.postError = action.payload;
        })
        .addCase(createPost.pending, (state, action) => {
            state.postLoading = true;
            state.postError = null;
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.postLoading = false;
            state.newPost = action.payload;
            state.postCreated = true;
        })
        .addCase(createPost.rejected, (state, action) => {
            state.postLoading = false;
            state.postError = action.payload;
        })
    },
});

export default postSlice.reducer;