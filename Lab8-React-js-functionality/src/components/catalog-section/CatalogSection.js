import './scss/CatalogSection.scss'
import CatalogBookCard from "./CatalogBookCard";
import CatalogHeader from "./CatalogHeader";
import {useEffect, useState} from "react";

let initialBooks = [
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

const CatalogSection = (props) => {
    const [fetchedBooks, setFetchedBooks] = useState(initialBooks);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [initialFilteredBooks, setInitialFilteredBooks] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false)

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