import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const sendMessage = createAsyncThunk("message/sendMessage", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('/api/message/send', {
            subject: value.subject,
            message_body: value.message_body,
            sender_id: value.sender_id,
            receiver_id: value.receiver_id
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

export const getMessages = createAsyncThunk("message/getMessages", 
                            async (value, {rejectWithValue}) => {
    try {
        const inbox = value.inbox;
    
        if(inbox) {
            const { data } = await axiosClient.post('/api/message/received', {
             user_id: value.user_id,});

             return data;
        
        } else {
            const { data } = await axiosClient.post('/api/message/sent', {
                user_id: value.user_id,});
                return data;
        }

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});