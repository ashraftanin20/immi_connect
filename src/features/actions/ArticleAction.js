import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const getArticles = createAsyncThunk("posts/latestPosts", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.get('/api/posts/latest');
        return data;

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});