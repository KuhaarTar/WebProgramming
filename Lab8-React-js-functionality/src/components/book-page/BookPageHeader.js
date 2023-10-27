import './scss/BookPageHeader.scss'
import arrow from './../../assets/Arrowarrow.png'

const BookPageHeader = () => {
    return (
        <div className={'book-page-header'}>
            <img src={arrow} alt={'arrow'}/>
            <h2> Book Details </h2>
        </div>
    )
}

export default BookPageHeader;