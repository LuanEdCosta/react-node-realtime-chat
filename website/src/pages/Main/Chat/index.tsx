import { FiSend } from 'react-icons/fi'
import { useRef } from 'react'

import {
  Container,
  MessagesContainer,
  MessageForm,
  MessageInput,
  SendMessageButton,
} from './styles'

export const Chat: React.FC = () => {
  const messageRef = useRef<HTMLInputElement | null>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Container>
      <MessagesContainer></MessagesContainer>

      <MessageForm onSubmit={handleSendMessage} noValidate>
        <MessageInput
          ref={messageRef}
          type="text"
          placeholder="Your Message..."
        />

        <SendMessageButton type="submit">
          <span>Send</span>
          <FiSend />
        </SendMessageButton>
      </MessageForm>
    </Container>
  )
}
