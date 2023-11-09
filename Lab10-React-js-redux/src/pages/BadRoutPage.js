import error from './../assets/error-page.png'
import Header from "../components/header/Header";

import './BadRoutePage.scss'

const BadRoutPage = () => {
    return (
        <div className={'error-page-wrapper'}>
            <Header/>
            <img className={'error-img'} src={error} alt={'error'}/>
        </div>
    )
}

export default BadRoutPage