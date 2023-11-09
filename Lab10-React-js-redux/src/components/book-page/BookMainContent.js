import './scss/BookMainContent.scss'
import {SUMMARY} from '../../constants/contentConstants'

const BookMainContent = (props) => {
    return (
        <div className={'content-wrapper'}>
            <div className={'img-wrapper'}>
                <div className={'book-img-back'}>
                    <img src={props.bookData.image} alt={'book'}/>
                </div>
            </div>
            <div className={'information-wrapper'}>
                <div>
                    <div className={'information-header'}>
                        <div className={'author-title'}>
                            <h1>{props.bookData.title}</h1>
                            <h2>{props.bookData.author}</h2>
                        </div>
                    </div>
                    <div className={'description'}>
                        <h3> Summary </h3>
                        <p>
                            {props.bookData.description + SUMMARY}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookMainContent