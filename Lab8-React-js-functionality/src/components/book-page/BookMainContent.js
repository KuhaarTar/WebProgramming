import './scss/BookMainContent.scss'
import {useLocation} from "react-router-dom";
import {SUMMARY} from '../../constants/contentConstants'
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

const BookMainContent = (props) => {
    return (
        <div className={'content-wrapper'}>
            <div className={'img-wrapper'}>
                <div className={'book-img-back'}>
                    <img src={props.bookData.image} alt={'book'}/>
                </div>
            </div>
            <div className={'information-wrapper'}>
                <div className={'information-header'}>
                    <div className={'author-title'}>
                        <h1>{props.bookData.title}</h1>
                        <h2>{props.bookData.author}</h2>
                    </div>
                </div>
                <div className={'description'}>
                    <h3> Summary </h3>
                    <p>
                        {props.bookData.description + SUMMARY}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookMainContent