import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/home/Home";
import CategoryNews from "../pages/CategoryNews";
import Auth from "../layouts/auth/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../components/newsDetails/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Navigate to = '/category/01'></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                
            }
        ]
    },
    {
        path: '/news/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`) 
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
]);

export default router;