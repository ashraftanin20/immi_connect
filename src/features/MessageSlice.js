import { createSlice } from '@reduxjs/toolkit';
import { sendMessage } from './actions/MessageAction';
const initialState = {
    messageError: null,
    messageLoading: false,
    messageSend: false,
    messages: null,
    message: null,
}
const MessageSlice = createSlice({
    name: "messageData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(sendMessage.pending, (state, action) => {
            state.messageLoading = true;
            state.messageError = null;
        })
        .addCase(sendMessage.fulfilled, (state, action) => {
            state.messageLoading = false;
            state.messageError = true;
            state.message = action.payload;
        })
        .addCase(sendMessage.rejected, (state, action) => {
            state.messageLoading = false;
            state.messageError = action.payload;
        })
    
    },
});

export default MessageSlice.reducer;