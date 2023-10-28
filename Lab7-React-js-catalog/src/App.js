import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import RootRout from "./pages/RootRout";
import Cart from "./pages/Cart";
import BadRoutPage from "./pages/BadRoutPage";
import {home,catalog,cart} from './constants/routes'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootRout/>,
        errorElement: <BadRoutPage/>,
        children: [
            {path: home, element: <Home/>},
            {path: catalog, element: <Catalog/>},
            {path: cart, element: <Cart/>}
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={routes}/>
    );
}

export default App;
