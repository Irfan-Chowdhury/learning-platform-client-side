import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
        // children:[
        //     {
        //         path:'/',
        //         element:<Home></Home>,
        //         // loader: () => fetch(`http://localhost:5000/news`) 
        //     },
        //     // {
        //     //     path:'/category/:id',
        //     //     element:<Category></Category>,
        //     //     loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`) 
        //     // },
        //     // {
        //     //     path:'/login',
        //     //     element:<Login></Login>
        //     // },
        //     // {
        //     //     path:'/register',
        //     //     element:<Register></Register>
        //     // },
        // ]
    }
]);