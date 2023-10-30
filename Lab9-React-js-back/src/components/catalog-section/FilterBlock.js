import React from 'react';
import './scss/CatalogHeader.scss'
const FilterBlock = ({open, filterObject, clearFilter, readInput, submitFilters}) => {
    return (
        <div className={open ? 'filter-block' : 'filter-block hidden-element'}>
            <button className={'clear-filters'} type={'button'} onClick={clearFilter}>
                <span></span>
                <span></span>
            </button>
            <input
                type="number"
                value={filterObject['price']}
                onChange={(event) => {
                    readInput('price', event);
                }}
                placeholder={'Price'}
            />
            <input
                type="number"
                value={filterObject['pages']}
                onChange={(event) => {
                    readInput('pages', event);
                }}
                placeholder={'Count of pages'}
            />
            <input
                type={'text'}
                value={filterObject['author']}
                onChange={(event) => {
                    readInput('author', event);
                }}
                placeholder={'Author name'}
            />
            <button type={'button'} className={'apply-filters'} onClick={submitFilters}>
                Apply
            </button>
        </div>
    );
};

export default FilterBlock;
