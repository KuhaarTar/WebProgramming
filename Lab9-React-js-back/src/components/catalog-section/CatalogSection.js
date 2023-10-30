import './scss/CatalogSection.scss'
import CatalogBookCard from "./CatalogBookCard";
import CatalogHeader from "./CatalogHeader";
import {useEffect, useState} from "react";
import {getAllBooksRequest} from "../../services/apiService";
import FancyLoader from "../utils-component/FancyLoader";

const CatalogSection = (props) => {
    const [initialBooks, setInitialBooks] = useState([]);
    const [fetchedBooks, setFetchedBooks] = useState(initialBooks);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [initialFilteredBooks, setInitialFilteredBooks] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getAllBooksRequest()
            .then(resp => {
                setInitialBooks(resp)
                setFetchedBooks(resp)
                setIsLoading(false)
            })
    }, [])

    function handleFilteredBooks(books) {
        setFilteredBooks(books)
        setInitialFilteredBooks(books)
        setIsFiltered(true)
    }

    function showNotFilteredData(clear = false) {
        if (clear) {
            setFilteredBooks([])
            setInitialFilteredBooks([])
            setIsFiltered(false)
        }
    }

    useEffect(() => {
        if (props.title === '') {
            if (isFiltered) {
                setFetchedBooks(initialFilteredBooks);
            } else {
                setFetchedBooks(initialBooks);
                setIsFiltered(false)
            }
        } else {
            const filterByTitle = isFiltered
                ? initialFilteredBooks.filter(book => book.title.toLowerCase().trim().includes(props.title.toLowerCase().trim()))
                : initialBooks.filter(book => book.title.toLowerCase().trim().includes(props.title.toLowerCase().trim()));
            if (isFiltered) {
                setFilteredBooks(filterByTitle);
            } else {
                setFetchedBooks(filterByTitle);
            }
        }
    }, [props.title, isFiltered]);

    return (
        <div className={'books-container'}>
            <CatalogHeader
                sendFilterUp={handleFilteredBooks}
                clearFilters={showNotFilteredData}
                title={props.title}
                data={initialBooks}/>
            <div className={'catalog'}>
                {<FancyLoader/> ? isLoading : "" }
                {
                    (filteredBooks.length !== 0 ?
                        filteredBooks : fetchedBooks).map(book => (
                        <CatalogBookCard
                            id={book.id}
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            priceInUah={book.priceInUah}
                            countOfPages={book.countOfPages}
                            image={book.image}
                        />
                    ))

                }
            </div>
        </div>
    )
}

export default CatalogSection