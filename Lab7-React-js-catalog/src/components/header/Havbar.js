import './scss/Havbar.scss'
import {NavLink} from "react-router-dom";
import {home,catalog,cart} from '../../constants/routes'
const Navbar = () => {

    return (<div>
        <div className={'navbar'}>
            <ul>
                <li>
                    <NavLink className={({isActive}) => (
                        isActive ? 'nav-link active' : 'nav-link'
                    )} to={home} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => (
                            isActive ? 'nav-link active' : 'nav-link'
                        )} to={catalog} end>
                        Catalog
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (
                        isActive ? 'nav-link active' : 'nav-link'
                    )} to={cart} end>
                        Cart
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>)
}

export default Navbar