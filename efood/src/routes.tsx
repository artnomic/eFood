import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/RestaurantPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/restaurant/:id" element={<Restaurant />}></Route>
  </Routes>
)

export default Rotas
