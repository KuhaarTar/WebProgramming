import './scss/BookPage.scss'
import {useLocation} from "react-router-dom";
import BookPageHeader from "./BookPageHeader";
import BookMainContent from "./BookMainContent";
import BuyButton from "./BuyButton";

let initialBooks = [
    {
        id: 1,
        countOfPages: 432,
        author: "Frank Herbert",
        title: "Dune",
        description: "Dune by Frank Herbert: Explore the intricate world of science and adventure in this 432-page epic. Join Paul Atreides on his journey in the deserts of Arrakis in this gripping tale of power and destiny.",
        priceInUah: 87.75,
        image: 'https://imageupload.io/ib/kswjd36v3RjWL0l_1696884536.png'
    },
    {
        id: 2,
        countOfPages: 256,
        author: "George Orwell",
        title: "1984",
        description: "1984 by George Orwell: Dive into the dystopian society of Oceania in this 256-page classic. George Orwell's \"1984\" is a thought-provoking masterpiece that will keep you guessing until the very end.",
        priceInUah: 37.75,
        image: 'https://imageupload.io/ib/3mE0ic5sGFtmfZi_1696884633.png'
    },
    {
        id: 3,
        countOfPages: 320,
        author: "Ikigai",
        title: "Hector Garcia",
        description: "Hector Garcia by Ikigai: Embark on a thrilling adventure with Hector Garcia in this 320-page novel filled with unexpected twists and turns. Discover the secrets of finding joy and purpose in the small things.",
        priceInUah: 36.00,
        image: 'https://imageupload.io/ib/kGlJpWqoxSeWJCr_1696884654.png'
    },
    {
        id: 4,
        countOfPages: 320,
        author: "Aristoteles",
        title: "Metafizik",
        description: "Metafizik by Aristoteles: Delve into the world of metaphysics in this 320-page philosophical masterpiece by Aristotle. Explore the fundamental questions about existence and reality in this thought-provoking adventure",
        priceInUah: 36.00,
        image: 'https://imageupload.io/ib/xX4IoVpsGB1IWja_1696884667.png'
    }
];
const BookPage = () => {
    const route = useLocation();
    const bookId = parseInt(route.search.substring(4, 5));
    const bookData = initialBooks.find(e => e.id === bookId)

    return (
        <div className={'book-page-wrapper'}>
            <BookPageHeader/>
            <BookMainContent bookData={bookData}/>
            <BuyButton price={bookData.priceInUah}/>
        </div>
    )
}

export default BookPage