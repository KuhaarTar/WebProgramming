import './scss/BookPage.scss'
import {useLocation} from "react-router-dom";
import BookPageHeader from "./BookPageHeader";
import BookMainContent from "./BookMainContent";
import BuyButton from "./BuyButton";
import {useEffect, useState} from "react";
import {getAllBooksRequest} from "../../services/apiService";
import FancyLoader from "../utils-component/FancyLoader";

const BookPage = () => {
    const [initialBooks, setInitialBooks] = useState([]);
    const route = useLocation();
    const bookId = parseInt(route.search.substring(4, 5));
    const bookData = initialBooks.find(e => e.id === bookId)

    useEffect(() => {
        getAllBooksRequest()
            .then(resp => setInitialBooks(resp))
    }, [])

    return (
        <div className={'book-page-wrapper'}>
            {initialBooks.length === 0 ? <FancyLoader/> : (
                <>
                    <BookPageHeader/>
                    <BookMainContent bookData={bookData}/>
                    <BuyButton price={bookData.priceInUah}/>
                </>
            )}
        </div>
    )
}

export default BookPage;
