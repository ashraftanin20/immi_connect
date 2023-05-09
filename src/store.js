import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loadUser } from './features/AuthSlice';
import SignupReducer from './features/SignupSlice';
import profileReducer from './features/ProfileSlice';
import postReducer from './features/PostSlice';
import articleReducer from './features/ArticleSlice';
import categoryReducer from './features/CategorySlice';
import commentReducer from './features/CommentSlice';
import usersReducer from './features/UserSlice';
import messageReducer from './features/MessageSlice';
import volunteerReducer from './features/VolunteerSlice';
//import loginReducer from './features/actions/LoginAction';

const store = configureStore({
    reducer: {
        auth: authReducer,
        signup: SignupReducer,
        userProfileData: profileReducer,
        postsData: postReducer,
        articles: articleReducer,
        categoriesData: categoryReducer,
        commentData: commentReducer,
        usersData: usersReducer,
        messageData: messageReducer,
        volunteerData: volunteerReducer,
    },
});
store.dispatch(loadUser(null));
export default store;