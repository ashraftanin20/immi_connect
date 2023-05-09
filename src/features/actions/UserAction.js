import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const getUsers = createAsyncThunk("users/getUsers", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.get('http://localhost:8000/api/users');
        return data;

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});
export const getVolunteer = createAsyncThunk("user/getUser", 
                            async (id, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.post('http://localhost:8000/api/user', {id});
        return data;

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});