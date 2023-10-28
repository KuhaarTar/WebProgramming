import SearchInput from "./SearchInput";
import Navbar from "./Havbar";
import Title from './Title'
import './scss/Header.scss'

const Header = () => {
    return (
        <header className={'header-wrapper'}>
            <div className={"header"}>
                <Title/>
                <SearchInput/>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header