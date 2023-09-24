import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";

const createdRoute = createBrowserRouter ([
    {

        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <Home></Home> 
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