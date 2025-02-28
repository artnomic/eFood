import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.rosa};

  width: 320px;

  border-radius: 4px;
`

export const Imagem = styled.img`
  width: 304px;
  border-radius: 4px;
`

export const CardContainer = styled.div`
  padding: 8px;
`

export const CardLine = styled.div`
  display: flex;
  padding: 8px;
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
  color: ${cores.branca};

  font-size: 18px;
  font-weight: bold;

  text-align: center;
  display: flex;
`

export const Descricao = styled.p`
  color: ${cores.branca};

  font-size: 14px;
  line-height: 22px;

  margin-top: 8px;

  display: block;
`

export const AddCarrinho = styled.div`
  width: 304px;
  padding: 8px;

  background-color: ${cores.letra};
  border-radius: 8px;

  text-align: center;

  font-weight: bold;
  font-size: 14px;

  a {
    text-decoration: none;
  }
`
