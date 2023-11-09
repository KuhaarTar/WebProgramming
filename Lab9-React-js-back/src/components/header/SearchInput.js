import search from './../../assets/search-icon.png'
import './scss/SearchInput.scss'
import {useState} from "react";

const SearchInput = (props) => {
    const [title, setTitle] = useState('');

    function readTitle(event) {
        setTitle(event.target.value)
        props.onReadTitle(event.target.value)
    }


    return (
        <div className={'search-container'}>
            <img className={'search-icon'} src={search} alt={'search-icon'}/>
            <input type={"text"} placeholder={'Search'} onChange={readTitle} value={title}/>
        </div>
    )
}

export default SearchInput