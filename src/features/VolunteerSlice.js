import { createSlice } from '@reduxjs/toolkit';
import { getVolunteer } from './actions/UserAction';

const initialState = {
    volunteerLoading: false,
    volunteerError: null,
    volunteer: null,
}
const volunteerSlice = createSlice({
    name: "volunteerData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getVolunteer.pending, (state, action) => {
            state.volunteerLoading = true;
            state.volunteerError = null;
        })
        .addCase(getVolunteer.fulfilled, (state, action) => {
            state.volunteerLoading = false;
            state.volunteer = action.payload;
        })
        .addCase(getVolunteer.rejected, (state, action) => {
            state.volunteerLoading = false;
            state.volunteerError = action.payload;
        })
    },
});

export default volunteerSlice.reducer;