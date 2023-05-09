import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './actions/UserAction';

const initialState = {
    usersError: null,
    usersLoading: false,
    volunteerLoading: false,
    volunteerError: null,
    volunteer: null,
    users: null,
}
const userSlice = createSlice({
    name: "usersData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state, action) => {
            state.usersLoading = true;
            state.usersError = null;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.usersLoading = false;
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.usersLoading = false;
            state.usersError = action.payload;
        })
    },
});

export default userSlice.reducer;