import { createBrowserRouter } from "react-router-dom";
import Register from "./container/register/Register";
import PublicLayout from "./container/layout/PublicLayout";
import UserLayout from "./container/layout/UserLayout";
import Login from "./container/Login/Login";
import UserProfile from "./container/user/UserProfile";
import EditProfile from "./container/user/EditProfile";
import CreatePost from "./container/post/CreatePost";
import Post from "./container/post/Post";
import Volunteer from "./container/volunteer/Volunteer";
import Message from "./container/message/Message";
import Posts from "./container/post/Posts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />
    },
    {
        path: '/',
        element: <UserLayout exact />,
        children: [
            {
                path:'/login',
                element: <Login exact /> 
            },
            {
                path: '/register',
                element: <Register exact />
            },
            {
                path: '/user/profile',
                element: <UserProfile exact />
            },
            {
                path: '/user/edit',
                element: <EditProfile exact />
            },
            {
                path: '/posts',
                element: <Posts exact />
            },
            {
                path: '/posts/:id',
                element: <Post exact />
            },
            {
                path: '/posts/create',
                element: <CreatePost exact />
            },
            {
                path: '/volunteer/:id',
                element: <Volunteer exact />
            },
            {
                path: '/user/message',
                element: <Message exact />
            }
            
        ]
    }
]);

export default router;