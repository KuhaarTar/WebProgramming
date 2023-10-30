import Title from "./Title";
import SearchInput from "./SearchInput";
import Navbar from "./Havbar";
import './scss/Header.scss'

const Header = (props) => {

    function passTitleUp(sendTitle) {
        props.onReadTitle(sendTitle);
    }

    return (
        <header className={'header-wrapper'}>
            <div className={"header"}>
                <Title/>
                <SearchInput onReadTitle={passTitleUp} />
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;
