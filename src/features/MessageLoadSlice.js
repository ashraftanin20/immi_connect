import { createSlice } from '@reduxjs/toolkit';
import { getMessages, sendMessage } from './actions/MessageAction';
const initialState = {
    messagesError: null,
    messagesLoading: false,
    messagesLoaded: false,
    messages: null,
}
const MessageLoadSlice = createSlice({
    name: "messagesData",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMessages.pending, (state, action) => {
            state.messagesLoading = true;
            state.messagesError = null;
        })
        .addCase(getMessages.fulfilled, (state, action) => {
            state.messagesLoading = false;
            state.messagesLoaded = true;
            state.messages = action.payload;
        })
        .addCase(sendMessage.rejected, (state, action) => {
            state.messagesLoading = false;
            state.messagesError = action.payload;
        })
    
    },
});

export default MessageLoadSlice.reducer;