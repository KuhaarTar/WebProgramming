export const addToCartDispatcher = (state, action) => {
    const existingItem = state.cart.find(book => book.id === action.bookToAdd.id);
    if (existingItem) {
        existingItem.countOfSameBooks += 1;
        existingItem.priceInUah += existingItem.initialPrice;
        return {
            ...state,
            totalAmount: state.totalAmount + existingItem.initialPrice,
        };
    } else {
        const newCartItem = {
            ...action.bookToAdd,
            countOfSameBooks: 1,
            priceInUah: action.bookToAdd.priceInUah,
            initialPrice: action.bookToAdd.priceInUah
        };
        return {
            ...state,
            cart: [...state.cart, newCartItem],
            totalAmount: state.totalAmount + newCartItem.initialPrice,
            countOfCartItems: state.countOfCartItems + 1,
        };
    }
};


export const deleteFromCartDispatcher = (state, action) => {
    const deletedItem = state.cart.find((book) => book.id === action.bookToDelete.id);

    if (!deletedItem) {
        return state;
    }

    const updatedCart = state.cart.filter((book) => book.id !== action.bookToDelete.id);

    return {
        ...state,
        cart: updatedCart,
        totalAmount: state.totalAmount - (deletedItem.initialPrice * deletedItem.countOfSameBooks),
        countOfCartItems: state.countOfCartItems - 1,
    };
};

export const addSameItem = (state, action) => {
    const updatedCart = state.cart.map((book) =>
        book.id === action.bookToUpdate.id
            ? {
                ...book,
                countOfSameBooks: book.countOfSameBooks + 1,
                priceInUah: book.priceInUah + action.bookToUpdate.initialPrice,
            }
            : book
    );

    const updatedTotalAmount =
        state.totalAmount + action.bookToUpdate.initialPrice;

    return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        countOfCartItems: state.countOfCartItems + 1,
    };
};

export const deleteSameItem = (state, action) => {

    if (action.bookToUpdate.countOfSameBooks === 1) {
        return state
    }

    const updatedCart = state.cart.map((book) =>
        book.id === action.bookToUpdate.id && book.countOfSameBooks > 1
            ? {
                ...book,
                countOfSameBooks: book.countOfSameBooks - 1,
                priceInUah: book.priceInUah - action.bookToUpdate.initialPrice,
            }
            : book
    );

    const updatedTotalAmount =
        state.totalAmount - action.bookToUpdate.initialPrice;

    return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        countOfCartItems: state.countOfCartItems - 1,
    };
};



