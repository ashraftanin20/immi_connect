import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const getPosts = createAsyncThunk("posts/getPosts", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.get('/api/posts');
        return data;

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});

export const getPost = createAsyncThunk("posts/getPost", 
                            async (id, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('/api/post', {id});
        return data.post;

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
        const { data } = await axiosClient.post('/api/posts/create',{
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