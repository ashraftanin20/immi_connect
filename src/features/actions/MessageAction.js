import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const sendMessage = createAsyncThunk("message/sendMessage", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('http://localhost:8000/api/message/send', {
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