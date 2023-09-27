import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";
import ErrorPage from "../pages/errrorpage/ErrorPage";

const createdRoute = createBrowserRouter ([
    {

        path : "/",
        element : <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader: () => fetch('/public/data.json'),
                 
            },

            {
                path : "/Donation",
                element : <Donation></Donation>
            },

            {
                path : "/Statistics",
                element : <Statistics></Statistics>
            }
        ]

    }
])
export default createdRoute;