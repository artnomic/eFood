import styled from 'styled-components'

import { ReactComponent as InstagramSVG } from '../../assets/images/Instagram.svg'
import { ReactComponent as FacebookSVG } from '../../assets/images/Facebook.svg'
import { ReactComponent as TwitterSVG } from '../../assets/images/Twitter.svg'

import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.letra};
  padding: 40px 0;
  font-size: 14px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FooterList = styled.ul`
  display: flex;
  padding: 40px 0 80px 0;
`

export const FooterListContainer = styled.li`
  padding-right: 8px;

  a {
    text-decoration: none;
  }
`

export const IconBase = styled.div`
  fill: ${cores.rosa};
`

export const InstagramIcon = styled(InstagramSVG)`
  ${IconBase}
`

export const TwitterIcon = styled(TwitterSVG)`
  ${IconBase}
`

export const FacebookIcon = styled(FacebookSVG)`
  ${IconBase}
`

export const FooterText = styled.p`
  font-weight: 400;
  font-size: 10px;
  max-width: 480px;
  text-align: center;
`
