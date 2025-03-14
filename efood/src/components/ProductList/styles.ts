import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.brancoBackground};

  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 32px;
`
