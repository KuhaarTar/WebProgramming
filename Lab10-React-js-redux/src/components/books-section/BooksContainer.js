import './scss/BooksContainer.scss'
import BookCard from "./BookCard";
import SectionHeader from "./SectionHeader";
import {useEffect, useState} from "react";
import {getAllBooksRequest} from "../../services/apiService.js";
import FancyLoader from "../utils-component/FancyLoader";

const BooksContainer = () => {
    const [fetchedBooks, setFetchedBooks] = useState([]);
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllBooksRequest().then((books) => {
            setFetchedBooks(books);
            setIsLoading(false);
        });
    }, []);

    function viewMoreBooks() {
        const newCount = countOfShown === 4 ? 8 : 4;
        const newLabel = countOfShown === 4 ? 'View less' : 'View more';
        setCountOfShown(newCount);
        setViewMore(newLabel);
    }


    return (
        <div className={'books-container'}>
            <SectionHeader/>
            <div className="books">
                {isLoading ? <FancyLoader/> : ''}
                {fetchedBooks.slice(0, countOfShown).map((book) => (
                    <BookCard
                        key={book.id}
                        author={book.author}
                        title={book.title}
                        image={book.image}
                        priceInUah={book.priceInUah}/>
                ))}
            </div>
            <div className={'books-footer'}>
                <button className={'view-more-btn'} onClick={viewMoreBooks}> {viewMore} </button>
            </div>
        </div>
    )
}

export default BooksContainer