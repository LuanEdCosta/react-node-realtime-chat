import styled, { css } from 'styled-components'

import { Initials } from 'src/components/Initials'

type ContainerProps = {
  isFromCurrentUser?: boolean
}

export const MessageContainer = styled.div`
  flex: 1;
  max-width: 75%;

  overflow: hidden;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  background: #2eb8b8;
  color: white;

  padding: 0.4rem 1.6rem;
`

export const SenderInitials = styled(Initials)`
  height: 4rem;
  width: 4rem;
  font-size: 1.4rem;

  background: rgba(0, 0, 0, 0.1);
  color: white;
`

export const SenderName = styled.div`
  flex: 1;
  padding: 1.6rem;
`

export const DateTime = styled.div`
  color: white;
  font-size: 1.2rem;
`

export const Message = styled.div`
  flex: 1;

  background: #33cccc;
  color: white;

  padding: 1.6rem;
`

export const Container = styled.div<ContainerProps>`
  display: flex;

  ${(props) => {
    if (props.isFromCurrentUser) {
      return css`
        justify-content: flex-end;

        ${Message} {
          background: #cc33cc;
          color: white;
        }

        ${InfoContainer} {
          background: #b82eb8;
          color: white;
        }
      `
    }

    return null
  }}
`
