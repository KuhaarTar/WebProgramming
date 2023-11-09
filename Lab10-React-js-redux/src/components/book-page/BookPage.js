import './scss/BookPage.scss'
import {useLocation} from "react-router-dom";
import BookPageHeader from "./BookPageHeader";
import BookMainContent from "./BookMainContent";
import BuyButton from "./BuyButton";
import {useEffect, useState} from "react";
import {getBookById} from "../../services/apiService.js";
import FancyLoader from "../utils-component/FancyLoader";

const BookPage = () => {
    const route = useLocation();
    const [bookData , setBookData] = useState();
    const bookId = parseInt(route.search.substring(4, 5));

    useEffect(() => {
        getBookById(bookId)
            .then(resp => {
                    setBookData(resp)
                    console.log(bookData)
                }
            )
    }, [])

    return (
        <div className={'book-page-wrapper'}>
            {bookData == null ? <FancyLoader/> : (
                <>
                    <BookPageHeader/>
                    <BookMainContent bookData={bookData}/>
                    <BuyButton bookData={bookData}/>
                </>
            )}
        </div>
    )
}

export default BookPage;
