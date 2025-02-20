import styled from 'styled-components'

export const HeaderBar = styled.header`
  width: 100%;

  padding: 40px 0;

  background-repeat: no-repeat;
  background-size: cover;

  font-weight: bold;

  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Fonte = styled.p`
  font-weight: bold;
  font-size: 18px;
`

export const Logo = styled.img`
  max-widht: 125px;
  height: 56px;
`

export const Slogan = styled.h2`
  font-size: 36px;
  font-weight: bold;
  padding: 140px 375px 0 375px;
  text-align: center;
`

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
