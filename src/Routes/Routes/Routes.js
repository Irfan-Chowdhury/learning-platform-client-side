import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import NotFound404 from "../../Pages/Shared/NotFound404/NotFound404";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch(`https://learning-server-sigma.vercel.app/courses`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://learning-server-sigma.vercel.app/category/${params.id}`) 
            },
            {
                path:'/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://learning-server-sigma.vercel.app/course/${params.id}`) 
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    { 
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);