import styles from './scss/CartItemsContainer.module.scss'

export const CartItemsContainer = (props) => {
    return (
        <>
            <div className={styles.cartContainer}>
                {props.children}
            </div>
            <div className={styles.totalAmountWrapper}>
                <p> Total amount: <span> {props.totalAmount + "$"} </span></p>
            </div>
        </>
    )
}