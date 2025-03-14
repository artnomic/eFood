import { useState } from 'react'
import { Link } from 'react-router-dom'

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
            <MaisDetalhes>
              <Link to={`/restaurant/${restaurantId}/${id}`}>
                Mais detalhes
              </Link>
            </MaisDetalhes>
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
            <MaisDetalhes>
              <Link to={`/restaurant/${restaurantId}/${id}`}>
                Adicionar ao carrinho - {formatCurrencies(preco)}
              </Link>
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
