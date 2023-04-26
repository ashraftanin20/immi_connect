import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loadUser } from './features/AuthSlice';
import SignupReducer from './features/SignupSlice';
import profileReducer from './features/ProfileSlice';
import postReducer from './features/PostSlice';
import categoryReducer from './features/CategorySlice';
//import loginReducer from './features/actions/LoginAction';

const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: SignupReducer,
        userProfileData: profileReducer,
        postsData: postReducer,
        categoriesData: categoryReducer,
    },
});
store.dispatch(loadUser(null));
export default store;