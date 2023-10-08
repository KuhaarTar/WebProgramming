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