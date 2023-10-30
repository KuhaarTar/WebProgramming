import './scss/Havbar.scss'
import {NavLink} from "react-router-dom";
import {HOME,CATALOG,CART} from '../../constants/routes'
const Navbar = () => {

    return (<div>
        <div className={'navbar'}>
            <ul>
                <li>
                    <NavLink className={({isActive}) => (
                        isActive ? 'nav-link active' : 'nav-link'
                    )} to={HOME} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => (
                            isActive ? 'nav-link active' : 'nav-link'
                        )} to={CATALOG} end>
                        Catalog
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (
                        isActive ? 'nav-link active' : 'nav-link'
                    )} to={CART} end>
                        Cart
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>)
}

export default Navbar