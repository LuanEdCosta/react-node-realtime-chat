import { FiSend } from 'react-icons/fi'
import { useRef } from 'react'

import {
  Container,
  MessagesContainer,
  Message,
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
      <MessagesContainer>
        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
          isFromCurrentUser
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
          isFromCurrentUser
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
          isFromCurrentUser
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
          isFromCurrentUser
        />

        <Message
          message="Hi, how are you?"
          datetime="17/07/2021 11:11 am"
          senderName="Luan Eduardo da Costa"
        />
      </MessagesContainer>

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
