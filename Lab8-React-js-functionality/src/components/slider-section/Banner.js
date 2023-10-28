import banner from '../../assets/Banner.png'
import './scss/Banner.scss'
import SliderDots from "./SliderDots";

const Banner = () => {
    return (
        <div className={'banner-wrapper'}>
            <div className="banner">
                <img src={banner} alt="" className="banner"/>
                <p className={'on-banner-text'}>
                    <span>25% discount</span> <br/>
                    all Paulo Coelho
                    books!
                </p>
            </div>
            <SliderDots/>
        </div>
    )
}

export default Banner