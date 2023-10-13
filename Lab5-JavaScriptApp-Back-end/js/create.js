import {
    validationOfObject,
    returnBookFromInputs,
    clearFormInputs,
} from './utils.js'

const submitButton = document.getElementById ( 'submit-form' );
const badFormWindow = document.querySelector ( '.bad-form-window' );
const closeModal = document.querySelector ( '.close-bad-form-modal' );

submitButton.addEventListener ( 'click', () => {

    const newBook = returnBookFromInputs ();
    if (validationOfObject ( newBook )) {
        fetch ( "http://localhost:8080/books",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ( newBook )
            } )
            .then ( response => response.json () )
            .then ( res => console.log ( res ) )
        clearFormInputs ()

    } else {
        badFormWindow.classList.remove ( 'hide-element' );
        console.log ( 'Bad form' );
    }
} )

closeModal.addEventListener ( 'click', () => {
    badFormWindow.classList.add ( 'hide-element' )
} )
