import styled, { css } from 'styled-components'

import { Initials } from 'src/components/Initials'
import { NoWrapEllipsis } from 'src/styles'

type ContainerProps = {
  isSelected?: boolean
}

export const NameInitials = styled(Initials)`
  background: ${(props) => props.theme.snow};
`

export const Content = styled.div`
  ${NoWrapEllipsis};

  flex: 1;

  padding-left: 1.6rem;
`

export const Name = styled.div`
  ${NoWrapEllipsis};

  color: ${(props) => props.theme.primaryText};
  font-weight: 900;

  margin-bottom: 0.2rem;
`

export const Status = styled.div`
  ${NoWrapEllipsis};

  color: ${(props) => props.theme.secondaryText};
  font-size: 1.4rem;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  padding: 1.6rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.hover};
  }

  ${(props) => {
    if (props.isSelected) {
      return css`
        background: ${(props) => props.theme.accent} !important;

        ${Name}, ${Status} {
          color: white !important;
        }

        ${NameInitials} {
          background: white;
        }
      `
    }
  }}
`
