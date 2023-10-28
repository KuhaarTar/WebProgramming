import './scss/BookPageHeader.scss'
import arrow from './../../assets/Arrowarrow.png'
import {Link} from "react-router-dom";
import {CATALOG} from "../../constants/routes";

const BookPageHeader = () => {
    return (
        <div className={'book-page-header'}>
            <Link to={CATALOG}>
                <img src={arrow} alt={'arrow'}/>
            </Link>
            <h2> Book Details </h2>
        </div>
    )
}

export default BookPageHeader;