import Navbar from "../components/header/navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <Navbar></Navbar>
            <outlet></outlet>
        </div>
    );
};

export default Layout;