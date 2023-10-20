import './scss/SectionHeader.scss'
import {NavLink} from "react-router-dom";
import {catalog} from "../../constants/routes";

const SectionHeader = () => {
    return (
        <div className={'books-header'}>
            <h2 className={'best-seller'}> Best Seller </h2>
            <NavLink  to={catalog} className={'view-all'}>View All</NavLink>
        </div>
    )
}

export default SectionHeader