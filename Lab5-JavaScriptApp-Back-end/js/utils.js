export const returnCard = ({id, countOfPages, author, title, description, priceInUah}) => `
    <div class="item_card">
        <img src="img/book-card.jpg" alt="card-img" class="card-photo">
        <div class="card-content">
            <h3>${title}</h3>
            <p class="text-hidden"> ${description} </p>
            <p class="pages">Count of pages: <strong> ${countOfPages} </strong> </p>
            <p class="author">Author: <strong> ${author} </strong> </p>
            <p class="price">Price: <strong> ${priceInUah}  UAH </strong> </p>
            <div class="cards-buttons">
                <button class="edit-button" data-book-id="${id}" > Edit </button>
                <button class="delete-card" data-book-id="${id}" type="button"> Delete </button>    
            </div>
        </div>
    </div>
`;

export const clearContainer = () => {
    const cardsContainer = document.querySelector('.cards-container');
    console.log("Container cleared")
    cardsContainer.innerHTML = null;
}

export const clearInput = () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = null;
}

export const deleteCard = (bookId) => {
    const cardElement = document.querySelector(`[data-book-id="${bookId}"]`);
    if (cardElement) {
        cardElement.parentElement.parentElement.remove();
        localStorage.clear();
    }
    location.reload()
}

export const renderModelsOnLoadList = (books) => {
    const cardsContainer = document.querySelector('.cards-container');
    clearContainer();
    books.forEach(book => {
        cardsContainer.innerHTML += returnCard(book);
    });
}

export const renderModelsOnLoadHttp = (httpUrl) => {
    const cardsContainer = document.querySelector('.cards-container');
    clearContainer();

    fetch(httpUrl)
        .then(response => response.json())
        .then(books => {
            console.log(books);
            books.forEach(book => {
                cardsContainer.innerHTML += returnCard(book);
                localStorage.setItem(book.title, JSON.stringify(book.id))
            })
            localStorage.setItem("booksArray", JSON.stringify(books));
        })
        .then(() => {
            cardsContainer.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('delete-card')) {
                    const bookId = target.getAttribute('data-book-id');
                    fetch(`http://localhost:8080/books/${bookId}`, {
                        method: "DELETE"
                    }).then(response => {
                        if (response.ok) {
                            deleteCard(bookId);
                            target.closest('.card').remove();
                        } else {
                            console.error("Failed to delete book:", response.status, response.statusText);
                        }
                    });
                }
            });

            cardsContainer.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('edit-button')) {
                    const dataId = target.getAttribute('data-book-id');
                    window.location.href = `edit.html?title=${dataId}`;
                }
            });
        });
};


export const validationOfObject = ({countOfPages, author, title, description, priceUAH}) => {
    return !(author === '' || title === '' || description === '');
}

export const sortModels = (books) => {
    clearContainer()
    const cardsContainer = document.querySelector('.cards-container');
    let sortedBooks = books.concat().sort(function (book_one, book_two) {
        if (book_one.priceInUah > book_two.priceInUah) return -1;
        if (book_one.priceInUah < book_two.priceInUah) return 1;
        return 0
    })
    console.log(sortedBooks)
    sortedBooks.forEach(book => {
        cardsContainer.innerHTML += returnCard(book);
    })
}

export const returnBookFromInputs = () => {
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');
    const priceInput = document.getElementById('price-input');
    const pagesInput = document.getElementById('pages-input');
    const descriptionTextArea = document.getElementById('description');
    return {
        title: titleInput.value,
        author: authorInput.value,
        countOfPages: parseInt(pagesInput.value),
        priceInUah: parseInt(priceInput.value),
        description: descriptionTextArea.value,
    };
}

export const clearFormInputs = () => {
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');
    const priceInput = document.getElementById('price-input');
    const pagesInput = document.getElementById('pages-input');
    const descriptionTextArea = document.getElementById('description');
    titleInput.value = null;
    authorInput.value = null;
    priceInput.value = null;
    pagesInput.value = null;
    descriptionTextArea.value = null;
}
export const getBookById = (id) => {

    const booksArrayJSON = localStorage.getItem("booksArray");
    const booksArray = JSON.parse(booksArrayJSON) || [];
    for (const book of booksArray) {
        if (book.id === id) {
            return book;
        }
    }
    return null;
}
