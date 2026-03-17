import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

const Auth = () => {
    return (
        <div className="font-poppins bg-[#f3f3f3]">
            <header className="w-11/12 mx-auto py-3.5">
            <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
            Auth
        </div>
    );
};

export default Auth;