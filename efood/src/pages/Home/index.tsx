import { useGetRestaurantQuery } from '../../services/api'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { Food } from '../RestaurantPage'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Food[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <Header variant="home" />
        <RestaurantList restaurants={restaurantes} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
