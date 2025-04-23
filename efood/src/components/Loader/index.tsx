import { BarLoader } from 'react-spinners'

import { cores } from '../../styles'

import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <BarLoader color={cores.rosa} />
    </Container>
  )
}

export default Loader
