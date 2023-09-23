import {
    returnCard,
    clearContainer,
    clearInput,
    renderModelsOnLoad,
    sortModels,
    countCostOfBooks,
} from './utils.js'

let books = [
    {
        countOfPages: 256,
        author: "Jane Smith",
        title: "Mystery at Midnight",
        description: "A captivating mystery that keeps you guessing until the end.",
        priceUAH: 357
    },
    {
        countOfPages: 320,
        author: "John Doe",
        title: "The Great Adventure",
        description: "A thrilling adventure novel with twists and turns.",
        priceUAH: 550
    },
    {
        countOfPages: 432,
        author: "Alice Johnson",
        title: "The Science of Everything",
        description: "An informative book exploring the wonders of science. ",
        priceUAH: 686
    }, {
        countOfPages: 256,
        author: "Jane Smith",
        title: "Mystery at Midnight <br> II part",
        description: "A captivating mystery that keeps you guessing until the end.",
        priceUAH: 1000
    },
];

let sortedBooks = []

const cardsContainer = document.querySelector ( '.cards-container' );
const darkBackground = document.querySelector ( '.dark-background' );
const countBlock = document.querySelector ( '.count-block p' );
const modal = document.querySelector ( '.bad-request-modal' );
const searchInput = document.getElementById ( 'searchInput' );
const closeModal = document.getElementById ( 'close-modal' );
const searchButton = document.getElementById ( 'searchButton' );
const clearButton = document.getElementById ( 'clearButton' );
const countButton = document.getElementById ( 'count-button' );
const sortInput = document.getElementById ( 'sort-input' );

renderModelsOnLoad ( books )
clearButton.addEventListener ( "click", () => {
    clearInput ()
    clearContainer ()
    renderModelsOnLoad ( books )

    console.log ( sortedBooks )
    sortedBooks.length = 0;
    console.log ( sortedBooks )
} );

searchButton.addEventListener ( "click", () => {
    sortedBooks.length = 0;
    clearContainer ()
    let isFound = false;
    let searchingTile = searchInput.value.toLowerCase ();
    books.forEach ( (book) => {
        if (book.title.toLowerCase ().includes ( searchingTile )) {
            sortedBooks.push ( book );
            console.log ( sortedBooks );
            cardsContainer.innerHTML += returnCard ( book );
            isFound = true;
        }
    } )
    if (!isFound) {
        renderModelsOnLoad ( books );
        darkBackground.classList.remove ( 'hide-element' );
        modal.classList.remove ( 'hide-element' );
    }
} )

closeModal.addEventListener ( 'click', () => {
    darkBackground.classList.add ( 'hide-element' );
    modal.classList.add ( 'hide-element' );
} )

countButton.addEventListener ( 'click', () => {
    if (sortedBooks.length > 0) {
        let cost = countCostOfBooks ( sortedBooks );
        countBlock.textContent = `Total cost: ${cost} UAH`;
    } else {
        let cost = countCostOfBooks ( books );
        countBlock.textContent = `Total cost: ${cost} UAH`;
    }
} );

sortInput.addEventListener ( 'change', () => {
    if (sortInput.checked) {
        if (sortedBooks.length > 0) {
            sortModels ( sortedBooks );
        } else {
            sortModels ( books );
        }
    } else {
        if (sortedBooks.length > 0) {
            clearContainer ()
            renderModelsOnLoad ( sortedBooks );
        } else {
            clearContainer ()
            renderModelsOnLoad ( books );
        }
    }
} )
