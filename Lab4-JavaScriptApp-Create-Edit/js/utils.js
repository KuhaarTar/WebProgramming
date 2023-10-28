export const returnCard = ({countOfPages, author, title, description, priceUAH} , id) => `
    <div class="item_card">
        <img src="img/book-card.jpg" alt="card-img" class="card-photo">
        <div class="card-content">
            <h3>${title}</h3>
            <p class="text-hidden">
                ${description}
            </p>
            <p class="pages">Count of pages: <strong> ${countOfPages} </strong> </p>
            <p class="author">Author: <strong> ${author} </strong> </p>
            <p class="price">Price: <strong> ${priceUAH}  UAH </strong> </p>
            <button class="edit-button" data-id="${id}" > Edit </button>
        </div>
    </div>
`;

export const clearContainer = () => {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = null;
}

export const clearInput = () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = null;
}

export const renderModelsOnLoad = (books) => {
    clearContainer ()
    let id = 0
    const cardsContainer = document.querySelector('.cards-container');
    console.log(JSON.parse(localStorage.getItem('booksArray')))
    if (cardsContainer) {
        books.forEach(book => {
            cardsContainer.innerHTML += returnCard(book,id);
            id++
        })
    }
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => button.addEventListener('click', () => {
        const title = button.getAttribute('data-id');
        window.location.href = `edit.html?title=${title}`;
        console.log(title)
    }))
}

export const sortModels = (books) => {
    return books.concat().sort(function (book_one, book_two) {
        if (book_one.priceUAH > book_two.priceUAH) return -1;
        if (book_one.priceUAH < book_two.priceUAH) return 1;
        return 0
    })
}

export const countCostOfBooks = (books) => {
    let cost = 0
    books.forEach(book => {
        cost += book.priceUAH;
    });
    return cost
}

export const validationOfObject = ({countOfPages, author, title, description, priceUAH}) => {
    return !(author === '' || title === '' || description === '');
}

export const returnBookFromInputs = () => {
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');
    const priceInput = document.getElementById('price-input');
    const pagesInput = document.getElementById('pages-input');
    const descriptionTextArea = document.getElementById('description');
    return {
        countOfPages: parseInt(pagesInput.value),
        author: authorInput.value,
        title: titleInput.value,
        description: descriptionTextArea.value,
        priceUAH: parseInt(priceInput.value)
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