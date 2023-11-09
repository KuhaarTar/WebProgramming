import styles from './scss/CartItem.module.scss'
import {useDispatch} from "react-redux";
import {actionsType} from "../../store/store";
import close from './../../assets/close.png'
import minus from './../../assets/minus.png'
import plus from './../../assets/plus.png'

export const CartItem = (props) => {
    const dispatch = useDispatch();

    function deleteFromCart() {
        dispatch({
            type: actionsType.deleteFromCart,
            bookToDelete: props.book
        })
    }

    function addSameItem() {
        dispatch({
            type: actionsType.addSameItem,
            bookToUpdate: props.book
        })
    }

    function deleteSameItem() {
        dispatch({
            type:actionsType.deleteSameItem,
            bookToUpdate:props.book
        })
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.leftCorner}>
                <img src={props.book.image} alt={"cart"}/>
                <div>
                    <h3>{props.book.title}</h3>
                    <p>{props.book.author}</p>
                </div>
            </div>
            <div className={styles.raiseButtons}>
                <button onClick={deleteSameItem}>
                    <img src={minus} alt={'minus'}/>
                </button>
                <p>
                    <strong>{props.book.countOfSameBooks}</strong>
                </p>
                <button onClick={addSameItem}>
                    <img src={plus} alt={'plus'}/>
                </button>
            </div>
            <div className={styles.rightCorner}>
                <p> {props.book.priceInUah + "$"}</p>
                <button onClick={deleteFromCart}>
                    <img src={close} alt={'delete'}/>
                </button>
            </div>
        </div>
    )
}