import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/LoginAction';
import { logoutUser } from './actions/LogoutAction';

const initialState = {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
    userSuccess: false,
    userError: null,
    userLoading: false,
    userLoaded: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser(state) {
            const userInfo = state.userInfo;

            if(userInfo) {
                return {
                    ...state,
                    userInfo,
                    userLoaded: true,
                };
            }
        },
        resetUser(state) {
            state.userInfo = null;
            state.userLoaded = false;
            localStorage.removeItem("userInfo");
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state, action) => {
            return { ...state, userLoading: true };
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload) {
                return {
                    ...state,
                    userInfo: action.payload,
                    userLoading: false,
                };
            } else {
                return state;
            }
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.userLoading = false;
            state.userError = action.payload;
            localStorage.removeItem("userInfo");
        })
        .addCase(logoutUser.pending, (state, action) => {
            return { ...state, userLoading: true };
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.userInfo = null;
            state.userLoading = false;
            state.userLoaded = false;
            localStorage.removeItem("userInfo");
        })
        .addCase(logoutUser.rejected, (state, action) => {
            return {
                ...state,
                userLoading: false,
                userError: action.payload
            }
        });
    },
});

export const { loadUser, resetUser } = authSlice.actions;
export default authSlice.reducer;