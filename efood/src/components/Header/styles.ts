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

  &:nth-of-type(2) {
    cursor: pointer;
  }
`

export const Logo = styled.img`
  max-width: 125px;
  height: 56px;
`

export const Slogan = styled.h2`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  padding: 140px 0 40px 0;
  max-width: 540px;
`

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
