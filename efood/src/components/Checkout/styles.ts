import styled from 'styled-components'
import { cores } from '../../styles'
import { MaisDetalhes } from '../Product/style'

type InputGroupProps = {
  maxWidth?: string
}

export const Header = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.letra};
  margin-bottom: 16px;
`

export const PersonalInfos = styled.div`
  .__is-flex {
    display: flex;
    justify-content: space-between;
  }
`

export const CardInfos = styled.div`
  .__is-flex {
    display: flex;
    justify-content: space-between;
  }
`

export const ThanksInfos = styled.div`
  ${Header} {
    font-size: 16px;
  }

  p {
    color: ${cores.letra};
    font-size: 14px;
    margin-bottom: 24px;
  }
`

export const FormInfo = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-weight: bold;
    font-size: 14px;
    display: flex;
    color: ${cores.letra};
  }

  input {
    color: ${cores.pretoForm};
    background-color: ${cores.letra};

    font-size: 14px;
    font-weight: bold;

    border: 2px solid ${cores.letra};

    border-radius: 8px;
    height: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;

    padding: 8px;

    &.__error {
      border: 2px solid ${cores.brancoBackground};
      background-color: rgba(255, 99, 71, 0.3);
    }
  }
`

export const Options = styled.div`
  margin-top: 24px;

  ${MaisDetalhes} {
    margin-bottom: 8px;
  }
`
