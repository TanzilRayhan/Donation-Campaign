import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;