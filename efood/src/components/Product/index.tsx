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

type ModalState = {
  isVisible: boolean
  url: string
}

type Props = {
  id: number
  restaurantId: number
  title: string
  description: string
  image: string
  porcao: string
  preco: number
}

export const formatCurrencies = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Product = ({
  id,
  restaurantId,
  title,
  description,
  image,
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
        foto: image,
        preco,
        nome: title,
        descricao: description,
        porcao
      })
    )
    dispatch(open())
  }

  return (
    <>
      <Container to={`/restaurant/${restaurantId}`}>
        <CardContainer
          onClick={() => {
            setModal({
              isVisible: true,
              url: image
            })
          }}
        >
          <Imagem src={image} />
          <CardLine>
            <Titulo>{title}</Titulo>
          </CardLine>
          <CardLine>
            <Descricao>{description}</Descricao>
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
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Serve: de {porcao}</p>
            <MaisDetalhes onClick={addToCart}>
              Adicionar ao carrinho - {formatCurrencies(preco)}
            </MaisDetalhes>
          </div>

          <img
            className="close"
            src={fechar}
            alt="Icone de Fechar"
            onClick={() => closeModal()}
          />
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Product
