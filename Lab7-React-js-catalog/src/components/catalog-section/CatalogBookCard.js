import styles from './scss/CatalogBookCard.module.scss'

const CatalogBookCard = (props) => {
    return (
        <div className={styles['catalog-book']}>
            <img src={props.image} alt={'book-image'}/>
            <div className={styles['book-content']}>
                <div className={'left-'}>
                    <h3 className={styles['book-title']}>{props.title}</h3>
                    <p className={styles['book-author']}>{props.author}</p>
                    <p className={styles['book-pages']}>{props.countOfPages} pages</p>
                </div>
                <div className={'right-'}>
                    <h3 className={styles['book-price']}>{props.priceInUah + ' $'}</h3>
                </div>
            </div>
        </div>
    )
}

export default CatalogBookCard