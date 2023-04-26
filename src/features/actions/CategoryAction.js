import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const getCategories = createAsyncThunk("categories/getCategories", 
                            async (value, {rejectWithValue}) => {
    try {
        const { data } = await axiosClient.get('http://localhost:8000/api/categories');
        return data;

    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});