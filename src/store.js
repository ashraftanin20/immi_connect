import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loadUser } from './features/AuthSlice';
import SignupReducer from './features/SignupSlice';
//import loginReducer from './features/actions/LoginAction';

const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: SignupReducer,
    },
});
store.dispatch(loadUser(null));
export default store;