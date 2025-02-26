import Restaurant from '../../models/Restaurant'
import Modelo from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Modelo
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            rate={restaurant.rate}
            image={restaurant.image}
            infos={restaurant.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
