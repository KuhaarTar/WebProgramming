import './scss/BooksContainer.scss'
import BookCard from "./BookCard";
import SectionHeader from "./SectionHeader";
import {useState} from "react";

const BooksContainer = () => {
    let fetchData = [
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
        }

    ];

    const [books, setBooks] = useState(fetchData);

    return (
        <div className={'books'}>
            <SectionHeader/>
            <div className="books-container">
                {
                    books.map(book => (
                        <BookCard
                            key={book.id}
                            author={book.author}
                            title={book.title}
                            image={book.image}
                            priceInUah={book.priceInUah}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BooksContainer