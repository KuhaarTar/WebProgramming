import {
    returnCard,
    clearContainer,
    clearInput,
    renderModelsOnLoadHttp,
    sortModels,
    renderModelsOnLoadList
} from './utils.js'

const cardsContainer = document.querySelector('.cards-container');
const darkBackground = document.querySelector('.dark-background');
const countBlock = document.querySelector('.count-block p');
const modal = document.querySelector('.bad-request-modal');
const searchInput = document.getElementById('searchInput');
const closeModal = document.getElementById('close-modal');
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const countButton = document.getElementById('count-button');
const sortInput = document.getElementById('sort-input');
renderModelsOnLoadHttp("http://localhost:8080/books")
let originalBooks = [];
let sortedBooks = [];
let showSorted = true;
let isFound = false;
clearButton.addEventListener("click", () => {
    clearInput()
    clearContainer()
    sortedBooks.length = 0;
    renderModelsOnLoadHttp("http://localhost:8080/books")
});

searchButton.addEventListener("click", () => {
    sortedBooks.length = 0;
    let searchingTitle = searchInput.value.toLowerCase().trim();
    showSorted = false
    if (searchingTitle.length === 0) {
        renderModelsOnLoadHttp("http://localhost:8080/books");
        darkBackground.classList.remove('hide-element');
        modal.classList.remove('hide-element');
        return;
    }

    fetch("http://localhost:8080/books")
        .then(promise => promise.json())
        .then(books => {
            console.log(searchingTitle);

            const matchingBooks = [];

            books.forEach((book) => {
                if (book.title.toLowerCase().trim().includes(searchingTitle)) {
                    isFound = true;
                    matchingBooks.push(book);
                }
            });

            if (isFound) {
                clearContainer();
                matchingBooks.forEach((book) => {
                    sortedBooks.push(book);
                    cardsContainer.innerHTML += returnCard(book);
                });
            } else {
                darkBackground.classList.remove('hide-element');
                modal.classList.remove('hide-element');
            }
        });
});

closeModal.addEventListener('click', () => {
    darkBackground.classList.add('hide-element');
    modal.classList.add('hide-element');
})

countButton.addEventListener('click', async () => {
    let cost = 0;
    if (sortedBooks.length === 0) {
        await fetch("http://localhost:8080/books")
            .then(response => response.json())
            .then(books => books.forEach(book => {
                    cost += book.priceInUah;
                })
            )
        countBlock.textContent = `Total cost: ${cost} UAH`;
    } else {
        sortedBooks.forEach(book => {
            cost += book.priceInUah;
        })
        countBlock.textContent = `Total cost: ${cost} UAH`;
    }
});

sortInput.addEventListener('change', () => {
    if (showSorted) {
        if (isFound) {
            sortedBooks.sort((a, b) => a.priceInUah - b.priceInUah);
            renderModelsOnLoadList(sortedBooks)
        } else {
            renderModelsOnLoadHttp("http://localhost:8080/books/sorted");
        }
    } else {
        if (isFound) {
            sortedBooks.sort((a, b) => b.priceInUah - a.priceInUah);
            clearContainer();
            renderModelsOnLoadList(sortedBooks)
        } else {
            renderModelsOnLoadHttp("http://localhost:8080/books");
        }
    }
    showSorted = !showSorted;
});

