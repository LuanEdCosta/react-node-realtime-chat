import styled from 'styled-components'

import { UserItem } from 'src/components'
import { DefaultScrollBar } from 'src/styles'

export const Container = styled.div`
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.snow};

  overflow-y: auto;
  ${DefaultScrollBar};

  @media only screen and (max-width: 968px) {
    border-bottom: 1px solid ${(props) => props.theme.snow};
    border-right: none;
  }
`

export const User = styled(UserItem)``

export const PlaceholderContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
