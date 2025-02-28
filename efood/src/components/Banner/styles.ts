import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-top: 156px;
  margin-bottom: 32px;
  color: ${cores.branca};
`

export const Segmento = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin-top: 24px;
  color: ${cores.branca};
`
