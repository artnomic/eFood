import { useParams } from 'react-router-dom' // Import necessário

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

import { useGetRestaurantByIdQuery } from '../../services/api'

export type Food = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestaurantByIdQuery(id!)

  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header variant="default" />

      {restaurante && (
        <Banner
          title={restaurante.titulo}
          image={restaurante.capa}
          segment={restaurante.tipo}
        />
      )}

      <ProductList
        produtos={restaurante?.cardapio || []}
        restaurantId={Number(id)}
      />
    </>
  )
}

export default RestaurantPage
