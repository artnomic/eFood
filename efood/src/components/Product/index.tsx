import { useDispatch } from 'react-redux'

import { useState } from 'react'

import {
  Container,
  CardContainer,
  CardLine,
  Descricao,
  Titulo,
  Imagem,
  ModalContent,
  Modal,
  MaisDetalhes
} from './style'

import fechar from '../../assets/images/fechar.png'

import { add, open } from '../../store/reducers/cart'
import { formatCurrencies } from '../../utils'

type ModalState = {
  isVisible: boolean
  url: string
}

type Props = {
  id: number
  restaurantId: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Product = ({
  id,
  restaurantId,
  nome,
  descricao,
  foto,
  porcao,
  preco
}: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: ''
    })
  }

  const addToCart = () => {
    dispatch(
      add({
        id,
        foto,
        preco,
        nome,
        descricao,
        porcao
      })
    )
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <Container to={`/restaurant/${restaurantId}`}>
        <CardContainer
          onClick={() => {
            setModal({
              isVisible: true,
              url: foto
            })
          }}
        >
          <Imagem src={foto} />
          <CardLine>
            <Titulo>{nome}</Titulo>
          </CardLine>
          <CardLine>
            <Descricao>{descricao}</Descricao>
          </CardLine>
          <CardLine>
            <MaisDetalhes>Mais detalhes</MaisDetalhes>
          </CardLine>
        </CardContainer>
      </Container>
      <Modal className={modal.isVisible ? '__is_visible' : ''}>
        <ModalContent className="container">
          <img className="plate" src={modal.url} />

          <div>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: de {porcao}</p>
            <MaisDetalhes onClick={addToCart}>
              Adicionar ao carrinho - {formatCurrencies(preco)}
            </MaisDetalhes>
          </div>

          <img
            className="close"
            src={fechar}
            alt="Icone de Fechar"
            onClick={closeModal}
          />
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Product
