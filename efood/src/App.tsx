import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import { store } from './store'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
