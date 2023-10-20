import twitter from "../../img/twitter.png";
import linkedin from "../../img/linkedin.png";
import facebook from "../../img/facebook.png";
import google from "../../img/google-plus.png";
import './scss/SocialNetworks.scss'

const SocialNetworks = () => {
  return (
      <div className={'social-networks'}>
        <a href={'#'}>
          <img src={twitter} alt={'Twitter'} className={'social-img'}/>
        </a>
        <a href={'#'}>
          <img src={linkedin} alt={'Linkedin'} className={'social-img'}/>
        </a>
        <a href={'#'}>
          <img src={facebook} alt={'Facebook'} className={'social-img'}/>
        </a>
        <a href={'#'}>
          <img src={google} alt={'Google'} className={'social-img'}/>
        </a>
      </div>
  )
}

export default SocialNetworks