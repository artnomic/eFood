import Tag from '../Tag'
import {
  Avaliacao,
  Container,
  CardContainer,
  Infos,
  CardLine,
  Descricao,
  Titulo,
  Imagem
} from './styles'

import avaliacao from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  description: string
  rate: number
  image: string
  destacado: boolean
  tipo: string
}

const Restaurant = ({
  id,
  title,
  description,
  rate,
  image,
  destacado,
  tipo
}: Props) => (
  <>
    <Container>
      <Infos>
        {destacado && <Tag>Destaque da Semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
      <Imagem src={image} />
      <CardContainer>
        <CardLine>
          <Titulo>{title}</Titulo>
          <Avaliacao>
            <h4>{rate}</h4>
            <img src={avaliacao} />
          </Avaliacao>
        </CardLine>
        <CardLine>
          <Descricao>{description}</Descricao>
        </CardLine>
        <CardLine>
          <Link to={`/restaurant/${id}`}>
            <Tag>Saiba mais</Tag>
          </Link>
        </CardLine>
      </CardContainer>
    </Container>
  </>
)

export default Restaurant
