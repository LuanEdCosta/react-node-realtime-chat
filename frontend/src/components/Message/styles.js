import styled, { css } from 'styled-components'

const HighlightedMessage = css`
  background: ${({ theme }) => theme.accentDark};
  align-self: flex-end;
`

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 45%;
  border-radius: 5px;
  margin-bottom: 8px;
  ${({ isRightSideMessage }) =>
    isRightSideMessage ? HighlightedMessage : null};
`

export const SenderName = styled.div`
  background: rgba(0, 0, 0, 0.1);
  font-weight: bold;
  margin-bottom: 8px;
  padding: 8px 16px;
`

export const MessageText = styled.div`
  padding: 0 16px;
  word-break: break-all;
`

export const MessageDate = styled.div`
  font-size: 1.2rem;
  padding: 8px 16px;
`
