import {
    returnBookFromInputs,
    validationOfObject,
    clearFormInputs
} from "./utils.js";

const datalist = document.getElementById('select-by-title');
const submitButton = document.getElementById('submit-form');
const badFormWindow = document.querySelector('.bad-form-window');
const notFoundWindow = document.querySelector('.not-found-window');
const closeModal = document.querySelector('.close-bad-form-modal');
const closeModalNot = document.querySelector('.close-bad-form-modal-not');
const titleInput = document.getElementById('title-input');

let books = JSON.parse(localStorage.getItem('booksArray'));

console.log(books)

books.forEach((book) => {
    let option = document.createElement('option');
    option.value = book.title;
    datalist.appendChild(option);
})
const indexToUpdate = books.findIndex(
    (book) => book.title.toLowerCase() === titleInput.value.toLowerCase()
);

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('title'));
document.getElementById('title-input').value = books[id].title;
document.getElementById('author-input').value = books[id].author;
document.getElementById('price-input').value = books[id].priceUAH;
document.getElementById('pages-input').value = books[id].countOfPages;
document.getElementById('description').value = books[id].description;
submitButton.addEventListener('click', () => {
    const indexToUpdate = books.findIndex(
        (book) => book.title.toLowerCase() === titleInput.value.toLowerCase()
    );
    if (indexToUpdate !== -1) {
        let bookToUpdate = returnBookFromInputs();
        if (isNaN(bookToUpdate.priceUAH)) {
            bookToUpdate.priceUAH = books[indexToUpdate].priceUAH;
        }
        if (isNaN(bookToUpdate.countOfPages)) {
            bookToUpdate.countOfPages = books[indexToUpdate].countOfPages;
        }
        if (bookToUpdate.title === '') {
            bookToUpdate.title = books[indexToUpdate].title
        }
        if (bookToUpdate.author === '') {
            bookToUpdate.author = books[indexToUpdate].author
        }
        if (bookToUpdate.description === '') {
            bookToUpdate.description = books[indexToUpdate].description
        }
        books[indexToUpdate] = bookToUpdate;
        localStorage.setItem('booksArray', JSON.stringify(books))
        console.log('Element found and saved to storage')
    }
    if (indexToUpdate === -1) {
        notFoundWindow.classList.remove('hide-element')
        console.log('Bad form');
    }
    window.location.href = "index.html"
})

closeModal.addEventListener('click', () => {
    badFormWindow.classList.add('hide-element')
})

closeModalNot.addEventListener(`click`, () => {
    notFoundWindow.classList.add('hide-element')
})