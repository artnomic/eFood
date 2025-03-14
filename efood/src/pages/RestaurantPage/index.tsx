import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // Import necessário
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Restaurant } from '../Home'

export type Food = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantPage = () => {
  const { id } = useParams() // Captura o ID da URL
  const [restaurante, setRestaurante] = useState<Restaurant | null>(null)
  const [produtoRestaurante, setProdutoRestaurante] = useState<Food[]>([])

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setRestaurante(res)
          setProdutoRestaurante(res.cardapio || [])
        })
    }
  }, [id]) // Adicionado como dependência

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

      <ProductList produtos={produtoRestaurante} restaurantId={Number(id)} />
    </>
  )
}

export default RestaurantPage
