import {
    returnCard,
    clearContainer,
    clearInput,
    renderModelsOnLoad,
    sortModels,
    countCostOfBooks,
} from './utils.js'

let sortedBooks = []
if (JSON.parse ( localStorage.getItem ( 'booksArray' ) ) == null) {
    localStorage.setItem ( 'booksArray', JSON.stringify ( [] ) )
}
let books = JSON.parse ( localStorage.getItem ( 'booksArray' ) )
books.push ( {
    countOfPages: 515,
    author: "Joe Abercrombie",
    title: "The Blade Itself",
    description: "Logen Ninefingers, infamous barbarian, has finally run out of luck. Caught in one feud too many, he’s on the verge of becoming a dead barbarian – leaving nothing behind him but bad songs, dead friends, and a lot of happy enemies.",
    priceUAH: 515
} )
books.push ( {
    countOfPages: 320,
    author: "John Doe",
    title: "The Great Adventure",
    description: "A thrilling adventure novel with twists and turns.",
    priceUAH: 550
} )
if (JSON.parse ( localStorage.getItem ( 'booksArray' ) ).length === 0) {
    localStorage.setItem ( 'booksArray', JSON.stringify ( books ) )
}
books = JSON.parse ( localStorage.getItem ( 'booksArray' ) )

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

renderModelsOnLoad (books)
clearButton.addEventListener ( "click", () => {
    clearInput ()
    clearContainer ()
    renderModelsOnLoad ( books )
    sortedBooks.length = 0;
} );
searchButton.addEventListener("click", () => {
    sortedBooks.length = 0;
    clearContainer();
    let isFound = false;
    let searchingTile = searchInput.value.toLowerCase();

    books.forEach((book, originalIndex) => {
        if (book.title.toLowerCase().includes(searchingTile)) {
            let bookWithOriginalIndex = {...book, originalIndex: originalIndex};
            sortedBooks.push(bookWithOriginalIndex);
            isFound = true;
        }
    });

    if (isFound) {
        renderModelsOnLoad(sortedBooks);
    } else {
        renderModelsOnLoad(books);
        darkBackground.classList.remove('hide-element');
        modal.classList.remove('hide-element');
    }
});

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
    console.log ( sortedBooks )
    if (sortInput.checked) {
        if (sortedBooks.length > 0) {
            renderModelsOnLoad(sortModels ( sortedBooks ));
        } else {
            renderModelsOnLoad(sortModels (books));
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