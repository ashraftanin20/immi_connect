import { createBrowserRouter } from "react-router-dom";
import Register from "./container/register/Register";
import PublicLayout from "./container/layout/PublicLayout";
import UserLayout from "./container/layout/UserLayout";
import Login from "./container/Login/Login";
import UserProfile from "./container/user/UserProfile";
import EditProfile from "./container/user/EditProfile";
import CreatePost from "./container/post/CreatePost";
import Posts from "./container/post/Posts";
import Post from "./container/post/Post";
import Volunteer from "./container/volunteer/Volunteer";
import Message from "./container/message/Message";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />
    },
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/register',
                element: <Register />
            },
            {
                path: '/user/profile',
                element: <UserProfile />
            },
            {
                path: '/user/edit',
                element: <EditProfile />
            },
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: '/posts/:id',
                element: <Post />
            },
            {
                path: '/posts/create',
                element: <CreatePost />
            },
            {
                path: '/volunteer/:id',
                element: <Volunteer />
            },
            {
                path: '/user/message',
                element: <Message />
            }
            
        ]
    }
]);

export default router;