import {
    returnCard,
    clearContainer,
    clearInput,
    renderModelsOnLoad,
} from './utils.js'

let books = [
    {
        countOfPages: 432,
        author: "Alice Johnson",
        title: "The Science of Everything",
        description: "An informative book exploring the wonders of science. ",
        priceUAH: 686
    },
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
    }
];

const cardsContainer = document.querySelector ( '.cards-container' );
const darkBackground = document.querySelector ( '.dark-background' );
const countBlock = document.querySelector ( '.count-block' );
const modal = document.querySelector ( '.bad-request-modal' );
const searchInput = document.getElementById ( 'searchInput' );
const closeModal = document.getElementById ( 'close-modal' );
const searchButton = document.getElementById ( 'searchButton' );
const clearButton = document.getElementById ( 'clearButton' );
const countButton = document.getElementById ( 'count-button' );

renderModelsOnLoad ( books )

clearButton.addEventListener ( "click", () => {
    clearInput ()
    clearContainer ()
    renderModelsOnLoad ( books )
} );

searchButton.addEventListener ( "click", () => {
    clearContainer ()
    let isFound = false;
    let searchingTile = searchInput.value.toLowerCase ();
    books.forEach ( (book) => {
        if (book.title.toLowerCase () === searchingTile) {
            cardsContainer.innerHTML += returnCard ( book );
            isFound = true;
        }
    } )
    if (!isFound) {
        renderModelsOnLoad ( books )
        darkBackground.classList.remove ( 'hide-element' )
        modal.classList.remove ( 'hide-element' )
    }
} )

closeModal.addEventListener ( 'click', () => {
    darkBackground.classList.add ( 'hide-element' )
    modal.classList.add ( 'hide-element' )
} )

countButton.addEventListener ( 'click', () => {
    let cost = 0;
    books.forEach ( book => {
        cost += book.priceUAH;
    } );
    countBlock.innerHTML += `<p class="total-cost">Total cost: <strong>${cost} UAH</strong></p>`;
} );
