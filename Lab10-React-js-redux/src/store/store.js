import {createStore} from "redux";
import {addSameItem, addToCartDispatcher, deleteFromCartDispatcher, deleteSameItem} from "./dispatchers";

export const actionsType = {
    addToCart: "addToCart",
    deleteFromCart: "deleteFromCart",
    addSameItem: "addSameItem",
    deleteSameItem:"deleteSameItem"
}

const initialState = {
    cart: [],
    totalAmount: 0,
    countOfCartItems: 0
};
const storeDispatcher = (state = initialState, action): any => {
    if (action.type === actionsType.addToCart) {
        return addToCartDispatcher(state, action);
    }
    if (action.type === actionsType.deleteFromCart) {
        return deleteFromCartDispatcher(state, action);
    }
    if (action.type === actionsType.addSameItem) {
        return addSameItem(state, action);
    }
    if (action.type === actionsType.deleteSameItem) {
        return deleteSameItem(state, action);
    }
    return state;
}

const store = createStore(storeDispatcher);

export default store