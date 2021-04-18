import { useEffect, useMemo, useRef } from 'react'
import { formatDistance } from 'date-fns'
import { FiMessageSquare, FiSend, FiUser } from 'react-icons/fi'

import { useChat, useUser } from 'src/hooks'
import { SERVER_EVENTS } from 'src/configs'
import { Placeholder } from 'src/components'

import {
  Container,
  MessagesContainer,
  PlaceholderContainer,
  Message,
  MessageForm,
  MessageInput,
  SendMessageButton,
} from './styles'

export const Chat: React.FC = () => {
  const { selectedUserId, currentConversation, socket } = useChat()
  const { user } = useUser()

  const messageRef = useRef<HTMLInputElement | null>(null)

  const hasNoMessageToShow = useMemo(() => {
    return !selectedUserId || !currentConversation?.messages.length
  }, [currentConversation?.messages.length, selectedUserId])

  const emptyMessage = useMemo(() => {
    if (!selectedUserId) return 'Select an User to Start a Conversation'
    return 'No Messages to Show'
  }, [selectedUserId])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const messageText = messageRef.current?.value

    if (!socket || !messageText || !selectedUserId || !user) return

    const newMessage: GlobalTypes.Message = {
      timestamp: new Date().getTime(),
      text: messageText,
      from: {
        id: socket.id,
        name: user.name,
      },
      to: {
        id: selectedUserId,
      },
    }

    if (messageRef.current) {
      messageRef.current.value = ''
      messageRef.current.focus()
    }

    socket.emit(SERVER_EVENTS.SEND_MESSAGE, newMessage)
  }

  useEffect(() => {
    if (!selectedUserId && messageRef.current) {
      messageRef.current.value = ''
    }
  }, [selectedUserId])

  return (
    <Container>
      <MessagesContainer>
        {currentConversation?.messages.map((message) => {
          const isFromCurrentUser = message.from.id === socket?.id

          const datetime = formatDistance(message.timestamp, new Date(), {
            addSuffix: true,
          })

          return (
            <Message
              key={message.timestamp}
              message={message.text}
              senderName={message.from.name}
              datetime={datetime}
              isFromCurrentUser={isFromCurrentUser}
            />
          )
        })}

        {hasNoMessageToShow && (
          <PlaceholderContainer>
            <Placeholder
              iconComponent={selectedUserId ? <FiMessageSquare /> : <FiUser />}
              message={emptyMessage}
            />
          </PlaceholderContainer>
        )}
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
