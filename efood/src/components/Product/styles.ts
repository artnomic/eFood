import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  max-width: 472px;

  padding: 8px;

  border: 1px solid ${cores.rosa};
  border-radius: 8px;

  background-color: ${cores.branca};
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardContainer = styled.div`
  padding-top: 217px;
`

export const CardTextLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
`

export const TextoAvaliacao = styled.h4`
  padding-right: 8px;
  font-weight: bold;
  font-size: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  text-align: center;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
