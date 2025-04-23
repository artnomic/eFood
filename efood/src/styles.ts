import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branca: '#FFFFFF',
  letra: '#FFEBD9',
  brancoBackground: '#FFF8F2',
  pretoForm: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${cores.rosa}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const ErrorMensage = styled.p`
  font-size: 48px;
  text-align: center;
  padding: 240px 240px 800px 240px;
`
