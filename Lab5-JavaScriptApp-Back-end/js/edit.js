import {
    returnBookFromInputs,
    clearFormInputs,
    getBookById
} from "./utils.js";

const datalist = document.getElementById('select-by-title');
const submitButton = document.getElementById('submit-form');
const badFormWindow = document.querySelector('.bad-form-window');
const notFoundWindow = document.querySelector('.not-found-window');
const closeModal = document.querySelector('.close-bad-form-modal');
const closeModalNot = document.querySelector('.close-bad-form-modal-not');
const titleInput = document.getElementById('title-input');

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('title'));
let bookToUpdate = getBookById(id)
document.getElementById('title-input').value = bookToUpdate.title;
document.getElementById('author-input').value = bookToUpdate.author;
document.getElementById('price-input').value = bookToUpdate.priceInUah;
document.getElementById('pages-input').value = bookToUpdate.countOfPages;
document.getElementById('description').value = bookToUpdate.description;


fetch("http://localhost:8080/books")
    .then(promise => promise.json())
    .then(books => books.forEach((book) => {
        let option = document.createElement('option');
        option.value = book.title;
        datalist.appendChild(option);
    }))

submitButton.addEventListener('click', () => {
    const updatedBook = returnBookFromInputs();
    fetch(`http://localhost:8080/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
    }).then(response => response.json())
        .then(res => console.log(res));
    window.location.href = "index.html"
    clearFormInputs()
})

closeModal.addEventListener('click', () => {
    badFormWindow.classList.add('hide-element')
})

closeModalNot.addEventListener(`click`, () => {
    notFoundWindow.classList.add('hide-element')
})