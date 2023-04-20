import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";
import { useDispatch } from "react-redux";
import { loadUser } from "../AuthSlice";

export const loginUser = createAsyncThunk(
    "auth/loginUser", 
    async (user, { rejectWithValue }) => {
        //const dispatch = useDispatch();
                 
        try {
            //const response = await axiosClient.get('http://localhost:8000/sanctum/csrf-cookie');
            const { data } = await axiosClient.post("http://localhost:8000/api/login", {
                email: user.email,
                password: user.password,
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        
});


const loginSlice = createSlice({
    name: 'loginUser',
    initialState: {
      entities: [],
      loading: 'idle',
      currentRequestId: undefined,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state, action) => {
          if (state.loading === 'idle') {
            state.loading = 'pending'
            state.currentRequestId = action.meta.requestId
          }
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          const { requestId } = action.meta
          if (
            state.loading === 'pending' &&
            state.currentRequestId === requestId
          ) {
            state.loading = 'idle'
            state.entities.push(action.payload)
            state.currentRequestId = undefined
          }
        })
        .addCase(loginUser.rejected, (state, action) => {
          const { requestId } = action.meta
          if (
            state.loading === 'pending' &&
            state.currentRequestId === requestId
          ) {
            state.loading = 'idle'
            state.error = action.error
            state.currentRequestId = undefined
          }
        })
    },
  });

  export default loginSlice;
