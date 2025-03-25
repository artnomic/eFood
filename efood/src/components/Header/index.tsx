import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, Fonte, Logo, Slogan, Home } from './styles'

import logoImagem from '../../assets/images/logoEfood.png'
import vectorBackground from '../../assets/images/fundo.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  variant: 'default' | 'home'
}

const Header = ({ variant }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderBar style={{ backgroundImage: `url(${vectorBackground})` }}>
        {variant === 'default' ? (
          <div className="container">
            <Fonte>Restaurantes</Fonte>
            <Link to="/">
              <Logo src={logoImagem} />
            </Link>
            <Fonte onClick={openCart}>
              {items.length} produto(s) no carrinho
            </Fonte>
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
}

export default Header
