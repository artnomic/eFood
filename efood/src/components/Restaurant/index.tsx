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
  infos: string[]
}

const Restaurant = ({ id, title, description, rate, image, infos }: Props) => (
  <>
    <Container>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
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
