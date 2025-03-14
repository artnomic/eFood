import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { Food } from '../RestaurantPage'

// API para ser utilizada nos exercícios
// https://fake-api-tau.vercel.app/api/efood/restaurantes
// https://fake-api-tau.vercel.app/api/efood/restaurantes/ID - ID vai do 1 ao 6

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
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    // Listar Restaurantes
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header variant="home" />
      <RestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
