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

type Props = {
  title: string
  description: string
  rate: number
  image: string
  infos: string[]
}

const Restaurant = ({ title, description, rate, image, infos }: Props) => (
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
          <Tag>Saiba mais</Tag>
        </CardLine>
      </CardContainer>
    </Container>
  </>
)

export default Restaurant
