const cardsContainer = document.querySelector ( '.cards-container' );
const searchInput = document.getElementById ( 'searchInput' );
export const returnCard = ({countOfPages, author, title, description, priceUAH}) => `
    <div class="item_card">
        <img src="img/book-card.jpg" alt="card-img">
        <div class="card-content">
            <h3>${title}</h3>
            <p class="text-hidden">
                ${description}
            </p>
            <p class="pages">Count of pages: <strong> ${countOfPages} </strong> </p>
            <p class="author">Author: <strong> ${author} </strong> </p>
            <p class="price">Price: <strong> ${priceUAH}  UAH </strong> </p>
        </div>
    </div>
`;

export const clearContainer = () => {
    cardsContainer.innerHTML = null;
}

export const clearInput = () => {
    searchInput.value = null;
}

export const renderModelsOnLoad = (books) => {
    books.forEach ( book => {
        cardsContainer.innerHTML += returnCard ( book );

    } )
}

export const sortModels = (books) => {
    clearContainer ()
    let sortedBooks = books.concat ().sort ( function (book_one, book_two) {
        if (book_one.priceUAH > book_two.priceUAH) return -1;
        if (book_one.priceUAH < book_two.priceUAH) return 1;
        return 0
    } )
    renderModelsOnLoad ( sortedBooks )
}

export const countCostOfBooks = (books) => {
    let cost = 0
    books.forEach ( book => {
        cost += book.priceUAH;
    } );
    return cost
}
