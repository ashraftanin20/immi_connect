import { createSlice } from '@reduxjs/toolkit';
import { getArticles } from './actions/ArticleAction';

const initialState = {
    articleError: null,
    articleLoading: false,
    articles: null,
}
const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getArticles.pending, (state, action) => {
            state.articleLoading = true;
            state.articleError = null;
        })
        .addCase(getArticles.fulfilled, (state, action) => {
            state.articleLoading = false;
            state.articles = action.payload;
        })
        .addCase(getArticles.rejected, (state, action) => {
            state.articleLoading = false;
            state.articleError = action.payload;
        })
    },
});

export default articleSlice.reducer;