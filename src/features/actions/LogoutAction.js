import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";
import { useDispatch } from "react-redux";
import { registerUser } from "./RegisterAction";
import { resetUser } from "../AuthSlice";

export const logoutUser = createAsyncThunk(
    "auth/logoutUser", 
    async (userInfo, { rejectWithValue }) => {
        let config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        
        try {
            const { data } = await axiosClient.post("http://localhost:8000/api/logout", {user: userInfo.user}, config);
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


