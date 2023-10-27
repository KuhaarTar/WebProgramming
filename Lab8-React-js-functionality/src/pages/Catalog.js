import CatalogSection from "../components/catalog-section/CatalogSection";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useState} from "react";

const Catalog = () => {

    const [searchingTitle, setSearchingTitle] = useState('');

    function readTitle(title) {
        setSearchingTitle(title)
    }

    return (
        <>
            <Header onReadTitle={readTitle}/>
            <CatalogSection title={searchingTitle}/>
            <Footer/>
        </>
    )
}

export default Catalog;
