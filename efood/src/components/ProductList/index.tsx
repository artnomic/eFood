import Food from '../../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  produtos: Food[]
}

const RestaurantList = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <Product
            key={produto.id}
            id={produto.id}
            restaurantId={produto.restaurantId}
            title={produto.title}
            description={produto.description}
            image={produto.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
