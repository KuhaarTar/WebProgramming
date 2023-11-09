import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Outlet} from "react-router-dom";

const RootRoute = () => {

    function readTitle(title) {
        console.log(title)
    }

    return (
        <div>
            <Header onReadTitle={readTitle}/>
                <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootRoute