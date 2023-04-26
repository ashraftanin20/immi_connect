import { createBrowserRouter } from "react-router-dom";
import Register from "./container/register/Register";
import PublicLayout from "./container/layout/PublicLayout";
import UserLayout from "./container/layout/UserLayout";
import Login from "./container/Login/Login";
import UserProfile from "./container/user/UserProfile";
import EditProfile from "./container/user/EditProfile";
import CreatePost from "./container/post/CreatePost";
import Posts from "./container/post/Posts";

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
                path: '/posts/create',
                element: <CreatePost />
            }
            
        ]
    }
]);

export default router;