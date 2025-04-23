import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import { MaisDetalhes as Button } from '../Product/style'
import { formatCurrencies, getTotalPrice } from '../../utils'
import { useState } from 'react'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
  }

  if (showCheckout) return <Checkout />

  return (
    <CartContainer className={isOpen ? '__is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatCurrencies(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              <p>Valor total</p>
              <p>{formatCurrencies(getTotalPrice(items))} </p>
            </Prices>
            <Button onClick={goToCheckout}>Continuar com a entrega</Button>
          </>
        ) : (
          <p className="__is-empity-text">
            O carrinho está vazio, adicione um produto para continuar com a
            compra!
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
