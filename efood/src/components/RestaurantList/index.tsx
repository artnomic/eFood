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
            id={restaurant.id}
            title={restaurant.titulo}
            description={restaurant.descricao}
            rate={restaurant.avaliacao}
            image={restaurant.capa}
            destacado={restaurant.destacado}
            tipo={
              restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)
            }
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
