import logo from '../../img/Logo.png'
import './scss/Title.scss'
const Title = () => {
  return (
      <div className={'title-container'}>
          <img src={logo} alt="" className={'logo'}/>
          {/*<h2 className={'store-title'}>The Bookshelf</h2>*/}
      </div>
  )
}

export default Title