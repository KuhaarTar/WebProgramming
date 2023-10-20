import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Outlet} from "react-router-dom";

const RootRout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootRout