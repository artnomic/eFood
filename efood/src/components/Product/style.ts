import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Container = styled(Link)`
  background-color: ${cores.rosa};

  width: 100%;
  height: 100%;
  max-width: 320px;

  border-radius: 4px;
  text-decoration: none;
  color: ${cores.branca};

  display: block;

  cursor: default;
`

export const Imagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  border-radius: 4px;
`

export const CardContainer = styled.div`
  gap: 32px;
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
  min-height: 175px;

  display: block;
`

export const MaisDetalhes = styled.div`
  width: 304px;
  padding: 8px;

  background-color: ${cores.letra};
  border-radius: 8px;

  text-align: center;

  font-weight: bold;
  font-size: 14px;

  margin-top: auto;

  a {
    text-decoration: none;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.__is_visible {
    display: flex;
  }

  .overlay {
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;

  background-color: ${cores.rosa};

  display: flex;
  border-radius: 4px;
  z-index: 1;

  .plate {
    width: 280px;
    height: 280px;
    margin: 32px;

    object-fit: cover;
  }

  div {
    margin-top: 32px;
    margin-right: 32px;

    display: flex;
    flex-direction: column;
  }

  p,
  h4 {
    color: ${cores.branca};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  .close {
    width: 16px;
    height: 16px;

    margin-top: 8px;
    margin-right: 8px;

    cursor: pointer;
  }

  ${MaisDetalhes} {
    font-size: 14px;
    font-weight: 700;
  }
`
