import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;