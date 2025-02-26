import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Container = styled.div`
  max-width: 472px;

  border: 1px solid ${cores.rosa};
  border-radius: 8px;

  background-color: ${cores.branca};

  position: relative;
  overflow: hidden;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardContainer = styled.div`
  padding: 8px;
`

export const CardLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
`

export const Avaliacao = styled.div`
  display: flex;

  h4 {
    padding-right: 8px;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  text-align: center;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
