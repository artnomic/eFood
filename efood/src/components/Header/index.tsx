import { HeaderBar, Fonte, Logo, Slogan, Home } from './styles'

import logoImagem from '../../assets/images/logoEfood.png'
import vectorBackground from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

type Props = {
  variant: 'default' | 'home'
}

const Header = ({ variant }: Props) => (
  <>
    <HeaderBar style={{ backgroundImage: `url(${vectorBackground})` }}>
      {variant === 'default' ? (
        <div className="container">
          <Fonte>Restaurantes</Fonte>
          <Link to="/">
            <Logo src={logoImagem} />
          </Link>
          <Fonte>0 produto(s) no carrinho</Fonte>
        </div>
      ) : (
        <>
          <Home>
            <Link to="/">
              <Logo src={logoImagem} />
            </Link>
            <Slogan>
              Viva experiências gastronômicas no conforto da sua casa
            </Slogan>
          </Home>
        </>
      )}
    </HeaderBar>
  </>
)

export default Header
