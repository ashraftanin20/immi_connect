import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './actions/RegisterAction';

const initialState = {
    registerSuccess: false,
    registerError: null,
    registerLoading: false,
    user: null,
}
const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state, action) => {
            state.registerLoading = true;
            state.registerError = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.registerLoading = false;
            state.registerSuccess = true;
            state.user = action.payload.user;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.registerLoading = false;
            state.registerSuccess = false;
            state.registerError = action.payload;
        })
    },
});

export default signupSlice.reducer;