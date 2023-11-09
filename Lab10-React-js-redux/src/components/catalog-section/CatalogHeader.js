import React, {useEffect, useState} from 'react';
import FilterBlock from './FilterBlock';
import {getFilteredBooks} from "../../services/apiService.js";
import {useLocation, useNavigate} from "react-router-dom";
import {createURLWithParams} from '../../services/routeService'
import {CATALOG} from "../../constants/routes";


const CatalogHeader = (props) => {
    const [open, setOpen] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState(props.data);
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        if (location.search !== '') {
            const fetchData = async () => {
                try {
                    return await getFilteredBooks(location.search);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData().then(r => {
                setFilteredBooks(r);
                props.sendFilterUp(r);
            });
        }
    }, [location.search]);


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
        navigate(CATALOG)
    }

    function readInput(type, event) {
        setFilterObject({
            ...filterObject,
            [type]: event.target.value,
        });
    }

    async function submitFilters() {
        let urlWithParams = createURLWithParams(filterObject);
        navigate(CATALOG + urlWithParams)
        // const {price, pages, author} = filterObject;
        // if (price < 0) {
        //     alert('Minus value')
        // }
        // let filteredResult = null;
        // await getFilteredBooks(filterObject, urlWithParams)
        //     .then(res => {
        //         filteredResult = res;
        //     });
        // if (filteredResult.length === 0) {
        //     alert('NotFound book by filter');
        //     return;
        // }
        // setFilteredBooks(filteredResult);
        // props.sendFilterUp(filteredResult);
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
