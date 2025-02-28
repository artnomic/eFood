import {
  FacebookIcon,
  FooterContainer,
  FooterList,
  FooterListContainer,
  FooterText,
  InstagramIcon,
  TwitterIcon
} from './styles'

import logo from '../../assets/images/logoEfood.png'
import { Link } from 'react-router-dom'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Link to="/">
        <img src={logo} />
      </Link>
      <FooterList>
        <FooterListContainer>
          <a href="#">
            <InstagramIcon />
          </a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">
            <FacebookIcon />
          </a>
        </FooterListContainer>
        <FooterListContainer>
          <a href="#">
            <TwitterIcon />
          </a>
        </FooterListContainer>
      </FooterList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </div>
  </FooterContainer>
)

export default Footer
