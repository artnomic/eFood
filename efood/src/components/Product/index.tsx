import {
  Container,
  CardContainer,
  CardLine,
  Descricao,
  Titulo,
  Imagem,
  AddCarrinho
} from './style'

import { Link } from 'react-router-dom'

type Props = {
  id: number
  restaurantId: number
  title: string
  description: string
  image: string
}

const Product = ({ id, restaurantId, title, description, image }: Props) => (
  <>
    <Container>
      <CardContainer>
        <Imagem src={image} />
        <CardLine>
          <Titulo>{title}</Titulo>
        </CardLine>
        <CardLine>
          <Descricao>{description}</Descricao>
        </CardLine>
        <CardLine>
          <AddCarrinho>
            <Link to={`/restaurant/${restaurantId}/`}>
              Adicionar ao carrinho
            </Link>
          </AddCarrinho>
        </CardLine>
      </CardContainer>
    </Container>
  </>
)

export default Product
