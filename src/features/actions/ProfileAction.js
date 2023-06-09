import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const updateProfile = createAsyncThunk("user/updateProfile", 
                            async (user, {rejectWithValue}) => {
    try {
      
        const { data } = await axiosClient.put('/api/profile/update',{
            id: user.id,
            name: user.name,
            email: user.email,
            telephone: user.telephone,
            is_volunteer: user.is_volunteer,
            support_type: user.support_type
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

export const getProfile = createAsyncThunk("user/Profile", 
                            async (userId, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('/api/profile', {id: userId});
        return data;
    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});