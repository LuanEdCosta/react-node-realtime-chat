import { useMemo, useRef } from 'react'
import { FiMessageSquare, FiSend } from 'react-icons/fi'
import { formatDistance, subDays } from 'date-fns'

import { Placeholder } from 'src/components'

import { Conversation } from '../types'

import {
  Container,
  MessagesContainer,
  PlaceholderContainer,
  Message,
  MessageForm,
  MessageInput,
  SendMessageButton,
} from './styles'

export interface ChatProps {
  selectedUserId: string | null
  currentConversation?: Conversation
}

export const Chat: React.FC<ChatProps> = ({
  currentConversation,
  selectedUserId,
}) => {
  const messageRef = useRef<HTMLInputElement | null>(null)

  const hasNoMessageToShow = useMemo(() => {
    return !currentConversation?.messages.length
  }, [currentConversation])

  const emptyMessage = useMemo(() => {
    if (!currentConversation) return 'Select an User to Start a Conversation'
    return 'No Messages to Show'
  }, [currentConversation])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(selectedUserId)
  }

  return (
    <Container>
      <MessagesContainer>
        {currentConversation?.messages.map((message) => {
          const datetime = formatDistance(
            subDays(message.timestamp, 3),
            new Date(),
            { addSuffix: true },
          )

          return (
            <Message
              key={message.id}
              message={message.message}
              senderName={message.sender.name}
              datetime={datetime}
            />
          )
        })}

        {hasNoMessageToShow && (
          <PlaceholderContainer>
            <Placeholder
              iconComponent={<FiMessageSquare />}
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
