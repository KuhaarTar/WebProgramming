import './scss/BookCard.scss'

const BookCard = (props) => {
    return (
        <div className={'book-card'}>
            <img src={props.image} alt={props.title}/>
            <div className={'book-information'}>
                <div className={'book-top'}>
                    <h3 className={'book-title'}>{props.title}</h3>
                    <p className={'book-author'}>{props.author}</p>
                </div>
                <h3 className={'book-price'}>{props.priceInUah + ' $'}</h3>
            </div>
        </div>
    )
}

export default BookCard