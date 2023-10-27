import './scss/Footer.scss'
import logo from '../../assets/Logo.png'
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
    return (
        <footer className={'footer-container'}>
            <div className={'footer-content'}>
                <div className={'top-content'}>
                    <div className={'website-inform'}>
                        <h3>BookShelf</h3>
                        <p>A bookstore is a store that sells books,
                            and where people can buy them.
                        </p>
                    </div>
                    <img className={'logo'} src={logo} alt={'Logo'}/>
                    <SocialNetworks/>
                </div>
                <hr/>
                <p className={'copyright'}>
                    2023 IoT Kuhar React App © Copyright all rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer