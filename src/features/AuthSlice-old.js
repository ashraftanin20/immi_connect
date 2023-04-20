import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/LoginAction';



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

  export default loginSlice.reducer;