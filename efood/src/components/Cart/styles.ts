import styled from 'styled-components'

import { cores } from '../../styles'

import { MaisDetalhes } from './../Product/style'

import close from '../../assets/images/lixeira-de-reciclagem.svg'

export const CartContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.__is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.rosa};

  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${MaisDetalhes} {
    max-width: 100%;
    width: 100%;
  }

  .__is-empity-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branca};
    text-align: center;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.letra};
  border-radius: 4px;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  p {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.letra};
    margin-bottom: 24px;
  }
`
