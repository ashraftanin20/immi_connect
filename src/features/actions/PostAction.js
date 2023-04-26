import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const getPosts = createAsyncThunk("posts/getPosts", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.get('http://localhost:8000/api/posts');
        return data;

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});

export const createPost = createAsyncThunk("posts/createPost", 
                            async (post, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('http://localhost:8000/api/posts/create',{
            title: post.title,
            post_body: post.post_body,
            user_id: post.user_id,
            category_id: post.category_id
        });
        return data; 
        
    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});