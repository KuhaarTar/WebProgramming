import './scss/BuyButton.scss';

const BuyButton = (props) => {
    return (
        <div className={'button-wrapper'}>
            <button className={'buy-button'}>
                {props.price +'$'}
                <p>
                    Buy now
                </p>
            </button>
        </div>
    )
}

export default BuyButton