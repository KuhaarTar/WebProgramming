import {
    validationOfObject,
    returnBookFromInputs,
    clearFormInputs,
} from './utils.js'

const submitButton = document.getElementById ( 'submit-form' );
const badFormWindow = document.querySelector ( '.bad-form-window' );
const closeModal = document.querySelector ( '.close-bad-form-modal' );

submitButton.addEventListener ( 'click', () => {
    let books = JSON.parse ( localStorage.getItem ( 'booksArray' ) );
    const newBook = returnBookFromInputs ();
    if (validationOfObject ( newBook )) {
        books.push ( newBook );
        clearFormInputs ()
        localStorage.setItem ( 'booksArray', JSON.stringify ( books ) );
        console.log ( JSON.parse ( localStorage.getItem ( 'booksArray' ) ) );
    } else {
        badFormWindow.classList.remove ( 'hide-element' );
        console.log ( 'Bad form' );
    }
} )

closeModal.addEventListener ( 'click', () => {
    badFormWindow.classList.add ( 'hide-element' )
} )
