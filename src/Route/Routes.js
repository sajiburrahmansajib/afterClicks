import { createBrowserRouter } from "react-router-dom";
import AllService from "../Components/Pages/AllService/AllService";
import Blog from "../Components/Pages/Blog/Blog";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import ServiceDetailsInformation from "../Components/Pages/ServiceDetailsInformation/ServiceDetailsInformation";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Editreview from "../Components/Privatepage/Editreview";
import AddService from "../Components/Privatepage/MyReview/AddService";
import MyReview from "../Components/Privatepage/MyReview/MyReview";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://afterclick-server-side.vercel.app/services'),
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allservices',
                element: <AllService></AllService>,
                loader: () => fetch('https://afterclick-server-side.vercel.app/allservices'),
            },
            {
                path: '/serviceDetailsInformation/:id',
                element: <ServiceDetailsInformation></ServiceDetailsInformation>,
                loader: ({ params }) => fetch(`https://afterclick-server-side.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                element: <PrivateRoute><Editreview></Editreview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://afterclick-server-side.vercel.app/editreview/${params.id}`)
            }
        ]

    }
]);
export default router;