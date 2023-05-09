import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const createComment = createAsyncThunk("comments/createComment", 
                            async (payload, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('http://localhost:8000/api/comments/create',{
            comment_body: payload.comment_body,
            post_id: payload.post_id,
            user_id: payload.user_id,
        });
        return data.comment; 
        
    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});

export const getComments = createAsyncThunk("comments/getComments", 
                            async (payload, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('http://localhost:8000/api/comments',{
            post_id: payload.post_id,
        });
        return data.comments; 
    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});