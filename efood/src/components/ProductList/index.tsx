import Product from '../Product'
import { Container, List } from './styles'
import Loader from '../Loader'

type Props = {
  produtos: Food[]
  restaurantId?: number
}

const RestaurantList = ({ produtos, restaurantId = 0 }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <Product
                key={produto.id}
                id={produto.id}
                restaurantId={restaurantId}
                nome={produto.nome}
                descricao={produto.descricao}
                foto={produto.foto}
                porcao={produto.porcao}
                preco={produto.preco}
              />
            ))
          ) : (
            <Loader />
          )}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
