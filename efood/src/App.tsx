import { GlobalCss } from './styles'

import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    <>
      <GlobalCss />
      <Header variant="home" />
      <Product />
    </>
  )
}

export default App
