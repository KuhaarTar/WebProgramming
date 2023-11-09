import {useSelector} from "react-redux";
import {CartItemsContainer} from "./CartItemsContainer";
import {CartHeader} from "./CartHeader";
import {CartItem} from "./CartItem";

export const CartPage = () => {
    const cart = useSelector(state => state.cart)
    const totalAmount = useSelector(state => state.totalAmount)

    return (
        <>
        <CartHeader/>
        <CartItemsContainer totalAmount = {totalAmount}>
            {
                Array.isArray(cart) && cart.map(item => (
                    <CartItem
                        key={item.id}
                        book={item}
                    />
                ))
            }
        </CartItemsContainer>
        </>
    )
}