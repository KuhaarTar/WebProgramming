import React, {useState} from 'react';
import FilterBlock from './FilterBlock';

const CatalogHeader = (props) => {
    const [open, setOpen] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState(props.data);
    const [filterObject, setFilterObject] = useState({
        'price': '',
        'pages': '',
        'author': '',
    });

    function openFilter() {
        setOpen(!open);
        setFilterObject({'price': '', 'pages': '', 'author': ''});
    }

    function clearFilter() {
        props.clearFilters(true);
        setFilterObject({'price': '', 'pages': '', 'author': ''});
    }

    function readInput(type, event) {
        setFilterObject({
            ...filterObject,
            [type]: event.target.value,
        });
    }

    function submitFilters() {
        const {price, pages, author} = filterObject;

        let filteredResult = props.data.filter((book) =>
            (!price || book.priceInUah === parseFloat(price)) &&
            (!pages || book.countOfPages === parseInt(pages)) &&
            (!author || book.author.includes(author))
        );

        if (filteredResult.length === 0) {
            alert('NotFound book by filter');
            return;
        }

        setFilteredBooks(filteredResult);
        props.sendFilterUp(filteredResult);
    }

    return (
        <div className={'catalog-header'}>
            <h2 className={'title'}> Full catalog </h2>
            <div className={'filter-wrapper'}>
                <FilterBlock
                    open={open}
                    filterObject={filterObject}
                    clearFilter={clearFilter}
                    readInput={readInput}
                    submitFilters={submitFilters}
                />
                <div onClick={openFilter} className={'filter-icon'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default CatalogHeader;
