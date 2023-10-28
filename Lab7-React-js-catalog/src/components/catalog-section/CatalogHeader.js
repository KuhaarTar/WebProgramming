import './scss/CatalogHeader.scss'
import {useEffect, useState} from "react";

const CatalogHeader = () => {

    const [open, setOpen] = useState(false);

    function openFilterWindow(event) {
        setOpen(!open);
    }

    return (
        <div className={'catalog-header'}>
            <h2 className={'title'}> Full catalog </h2>
            <div className={'filter-wrapper'}>
                <div className={open ? 'filter-block' : 'filter-block hidden-element'}>
                    <input type="number" placeholder={'Price'}/>
                    <input type="number" placeholder={'Count of pages'}/>
                    <input type={'text'} placeholder={'Author name'}/>
                    <button type={'button'} className={'apply-filters'}> Apply </button>
                </div>
                <div onClick={openFilterWindow} className={'filter-icon'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default CatalogHeader