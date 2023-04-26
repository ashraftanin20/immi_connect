import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions/CategoryAction";


const initialState = {
    categoryUpdated: false,
    categoryLoaded: false,
    categoryError: null,
    categoryLoading: false,
    categories: null,
}
const categorySlice = createSlice({
    name: "categoriesData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state, action) => {
            state.categoryLoading = true;
            state.categoryError = null;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categoryLoading = false;
            state.categoryLoaded = true;
            state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.categoryLoading = false;
            state.categoryLoaded = false;
            state.categoryError = action.payload;
        })
    },
});

export default categorySlice.reducer;