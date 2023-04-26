import { createSlice } from '@reduxjs/toolkit';
import { getProfile, updateProfile } from './actions/ProfileAction';

const initialState = {
    profileUpdated: false,
    profileLoaded: false,
    profileError: null,
    profileLoading: false,
    userProfile: null,
}
const userProfileSlice = createSlice({
    name: "userProfileData",
    initialState,
    reducers: {
       resetUserProfile(state, action) {
            state.updateProfile = null;
            state.profileLoaded = false;
       }
    },
    extraReducers: (builder) => {
        builder
        .addCase(updateProfile.pending, (state, action) => {
            state.profileLoading = true;
            state.profileError = null;
        })
        .addCase(updateProfile.fulfilled, (state, action) => {
            state.profileLoading = false;
            state.profileUpdated = true;
            state.userProfile = action.payload;
        })
        .addCase(updateProfile.rejected, (state, action) => {
            state.profileLoading = false;
            state.profileUpdated = false;
            state.profileError = action.payload;
        })
        .addCase(getProfile.pending, (state, action) => {
            state.profileLoading = true;
            state.profileError = null;
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            state.profileLoading = false;
            state.profileLoaded = true;
            state.userProfile = action.payload;
        })
        .addCase(getProfile.rejected, (state, action) => {
            state.profileLoading = false;
            state.profileLoad = false;
            state.profileError = action.payload;
        })
    },
});

export const { resetUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;