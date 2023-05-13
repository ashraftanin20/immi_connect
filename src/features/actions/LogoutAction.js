import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";


export const logoutUser = createAsyncThunk(
    "auth/logoutUser", 
    async (userInfo, { rejectWithValue }) => {
        let config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        
        try {
            const { data } = await axiosClient.post("/api/logout", {user: userInfo.user}, config);
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        
    }
);


