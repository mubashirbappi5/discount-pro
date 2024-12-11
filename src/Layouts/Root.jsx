import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";



const Root = () => {
    
    return (
        <div>
            <header>
                <Navber/>
                <Toaster/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Root;