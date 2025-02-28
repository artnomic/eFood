import styled from 'styled-components'

import { cores } from '../../styles'
import { Container as Card } from '../Product/style'

export const Container = styled.section`
  background-color: ${cores.brancoBackground};

  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  column-gap: 32px;

  ${Card} {
    margin-bottom: 32px;
  }
`
