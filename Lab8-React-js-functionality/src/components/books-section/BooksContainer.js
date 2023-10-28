import './scss/BooksContainer.scss'
import BookCard from "./BookCard";
import SectionHeader from "./SectionHeader";
import {useState} from "react";

const BooksContainer = () => {
    let fetchedBooks = [
        {
            id: 1,
            countOfPages: 432,
            author: "Frank Herbert",
            title: "Dune",
            description: "An informative book exploring the wonders of science. ",
            priceInUah: 87.75,
            image: 'https://imageupload.io/ib/kswjd36v3RjWL0l_1696884536.png'
        },
        {
            id: 2,
            countOfPages: 256,
            author: "George Orwell",
            title: "1984",
            description: "A captivating mystery that keeps you guessing until the end.",
            priceInUah: 37.75,
            image: 'https://imageupload.io/ib/3mE0ic5sGFtmfZi_1696884633.png'
        },
        {
            id: 3,
            countOfPages: 320,
            author: "Ikigai",
            title: "Hector Garcia",
            description: "A thrilling adventure novel with twists and turns.",
            priceInUah: 36.00,
            image: 'https://imageupload.io/ib/kGlJpWqoxSeWJCr_1696884654.png'
        },
        {
            id: 4,
            countOfPages: 320,
            author: "Aristoteles",
            title: "Metafizik",
            description: "A thrilling adventure novel with twists and turns.",
            priceInUah: 36.00,
            image: 'https://imageupload.io/ib/xX4IoVpsGB1IWja_1696884667.png'
        },
        {
            id: 5,
            countOfPages: 350,
            author: "Stefan Zweig",
            title: "Olaganustu big gece",
            description: "Of the five contenders for power, " +
                "one is dead, another in disfavor, and still the wars rage as violently " +
                "as ever, as alliances are made and broken. Joffrey, of " +
                "House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. ",
            priceInUah: 15.99,
            image: 'https://imageupload.io/ib/EKg1QL8obKjPujb_1698334971.png'
        },
        {
            id: 6,
            countOfPages: 420,
            author: "H. G. Wells",
            title: "Zaman makinesi",
            description: "Embark on a thrilling adventure through time with H. G. Wells. In this 320-page classic, you'll encounter twists and turns that will leave you on the edge of your seat. Explore the possibilities and perils of time travel in this timeless masterpiece.",
            priceInUah: 30.00,
            image: 'https://imageupload.io/ib/1OlGM1luVPWkxyb_1698334971.png'
        },
        {
            id: 7,
            countOfPages: 520,
            author: "Johann Wolfgang Von",
            title: "Genc Wertherin Acilari",
            description: "Delve into the world of passion, desire, and heartache with Johann Wolfgang von Goethe's classic. With 320 pages of emotional intensity and unexpected twists, this novel takes you on a thrilling adventure through the depths of human emotion.",
            priceInUah: 27.00,
            image: 'https://imageupload.io/ib/3TNxgVYdfF5Mqhx_1698334971.png'
        },
        {
            id: 8,
            countOfPages: 220,
            author: "William Shakespeare",
            title: "Romeo and Juliet",
            description: "William Shakespeare's timeless masterpiece, 'Romeo and Juliet,' is a thrilling adventure into the world of love and tragedy. With 320 pages filled with twists and turns, this iconic tale of star-crossed lovers will captivate your heart and soul.",
            priceInUah: 39.99,
            image: 'https://imageupload.io/ib/almmrnh58Dlm0sV_1698334971.png'
        },
    ];
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')

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