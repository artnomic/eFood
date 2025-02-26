import styled from 'styled-components'

import { cores } from '../../styles'
import { Container as Card } from '../Restaurant/styles'

export const Container = styled.section`
  padding: 80px 0;
  background-color: ${cores.brancoBackground};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  ${Card} {
    margin-bottom: 40px;
  }
`
