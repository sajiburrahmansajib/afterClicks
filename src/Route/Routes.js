import { createBrowserRouter } from "react-router-dom";
import AllService from "../Components/Pages/AllService/AllService";
import Blog from "../Components/Pages/Blog/Blog";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import ServiceDetailsInformation from "../Components/Pages/ServiceDetailsInformation/ServiceDetailsInformation";
import SignUp from "../Components/Pages/SignUp/SignUp";
import AddService from "../Components/Privatepage/MyReview/AddService";
import MyReview from "../Components/Privatepage/MyReview/MyReview";
import Main from "../Layout/Main";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/services'),
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
                loader: () => fetch('http://localhost:5000/allservices'),
            },
            {
                path: '/serviceDetailsInformation/:id',
                element: <ServiceDetailsInformation></ServiceDetailsInformation>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]

    }
]);
export default router;