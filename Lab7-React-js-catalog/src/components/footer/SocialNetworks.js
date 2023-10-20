import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google-plus.png";
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