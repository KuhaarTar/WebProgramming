import {
    returnBookFromInputs,
    validationOfObject,
    clearFormInputs
} from "./utils.js";

const datalist = document.getElementById ( 'select-by-title' );
const submitButton = document.getElementById ( 'submit-form' );
const badFormWindow = document.querySelector ( '.bad-form-window' );
const notFoundWindow = document.querySelector ( '.not-found-window' );
const closeModal = document.querySelector ( '.close-bad-form-modal' );
const closeModalNot = document.querySelector ( '.close-bad-form-modal-not' );
const titleInput = document.getElementById ( 'title-input' );

let books = JSON.parse ( localStorage.getItem ( 'booksArray' ) );

console.log ( books )

books.forEach ( (book) => {
    let option = document.createElement ( 'option' );
    option.value = book.title;
    datalist.appendChild ( option );
} )

submitButton.addEventListener ( 'click', () => {
    const indexToUpdate = books.findIndex (
        (book) => book.title.toLowerCase () === titleInput.value.toLowerCase ()
    );
    if (indexToUpdate !== -1) {
        if (validationOfObject ( returnBookFromInputs () )) {
            books[indexToUpdate] = returnBookFromInputs ();
            localStorage.setItem ( 'booksArray', JSON.stringify ( books ) )
            console.log ( 'Element found and saved to storage' )
        } else {
            badFormWindow.classList.remove ( 'hide-element' );
            console.log ( 'Bad form' );
        }
    }
    if (indexToUpdate === -1) {
        notFoundWindow.classList.remove ( 'hide-element' )
        console.log ( 'Bad form' );
    }
    clearFormInputs()
} )

closeModal.addEventListener ( 'click', () => {
    badFormWindow.classList.add ( 'hide-element' )
} )

closeModalNot.addEventListener ( `click`, () => {
    notFoundWindow.classList.add ( 'hide-element' )
} )