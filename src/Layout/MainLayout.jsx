import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;