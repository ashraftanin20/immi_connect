import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./container/register/Register";
import PublicLayout from "./container/layout/PublicLayout";
import UserLayout from "./container/layout/UserLayout";
import Login from "./container/Login/Login";
import UserProfile from "./container/user/UserProfile";

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
            
        ]
    }
]);

export default router;