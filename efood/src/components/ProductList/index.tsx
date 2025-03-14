import Product from '../Product'
import { Container, List } from './styles'
import { Food } from '../../pages/RestaurantPage'

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
                title={produto.nome}
                description={produto.descricao}
                image={produto.foto}
                porcao={produto.porcao}
                preco={produto.preco}
              />
            ))
          ) : (
            <p>Carregando produtos...</p>
          )}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
