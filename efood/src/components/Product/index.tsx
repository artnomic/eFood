import {
  Avaliacao,
  Card,
  CardContainer,
  CardTextLine,
  Descricao,
  TextoAvaliacao,
  Titulo
} from './styles'

import sushi from '../../assets/images/sushi.png'
import avaliacao from '../../assets/images/estrela.png'
import Tag from '../Tag'

const Product = () => (
  <>
    <Card style={{ backgroundImage: `url(${sushi})` }}>
      <Tag>Destaque da Semana</Tag>
      <Tag>Japonesa</Tag>
    </Card>
    <CardContainer>
      <CardTextLine>
        <Titulo>Restaurante</Titulo>
        <Avaliacao>
          <TextoAvaliacao>4.9</TextoAvaliacao>
          <img src={avaliacao} />
        </Avaliacao>
      </CardTextLine>
      <CardTextLine>
        <Descricao>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </Descricao>
      </CardTextLine>
      <CardTextLine>
        <Tag>Saiba mais</Tag>
      </CardTextLine>
    </CardContainer>
  </>
)

export default Product
