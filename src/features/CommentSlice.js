import { createSlice } from '@reduxjs/toolkit';
import { createComment, getComments } from './actions/CommentAction';
const initialState = {
    commentUpdated: false,
    commentLoaded: false,
    commentError: null,
    commentLoading: false,
    commentCreated: false,
    commentDeleted: false,
    commentsLoading: false,
    commentsError: null,
    commentsLoaded: false,
    comments: null,
    comment: null,
}
const commentSlice = createSlice({
    name: "commentData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(createComment.pending, (state, action) => {
            state.commentLoading = true;
            state.commentError = null;
        })
        .addCase(createComment.fulfilled, (state, action) => {
            state.commentLoading = false;
            state.comment = action.payload;
            state.commentCreated = true;
        })
        .addCase(createComment.rejected, (state, action) => {
            state.commentLoading = false;
            state.commentError = action.payload;
        })
        .addCase(getComments.pending, (state, action) => {
            state.commentsLoading = true;
            state.commentsError = null;
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.commentsLoading = false;
            state.commentsLoaded = true;
            state.comments = action.payload;
        })
        .addCase(getComments.rejected, (state, action) => {
            state.commentsLoading = false;
            state.commentsLoaded = false;
            state.commentsError = action.payload;
        })
    },
});

export default commentSlice.reducer;