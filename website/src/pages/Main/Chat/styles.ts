import styled from 'styled-components'

import { DefaultScrollBar } from 'src/styles'
import { AccentButton, MessageItem, SnowInput } from 'src/components'

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const MessagesContainer = styled.div`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;
  ${DefaultScrollBar};

  padding: 1.6rem;
`

export const Message = styled(MessageItem)`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export const PlaceholderContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MessageForm = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 1.6rem;

  border-top: 1px solid ${(props) => props.theme.snow};
`

export const MessageInput = styled(SnowInput)`
  flex: 1;
`

export const SendMessageButton = styled(AccentButton)`
  height: 5rem;
  min-width: 15rem;

  margin-left: 1.6rem;
`
