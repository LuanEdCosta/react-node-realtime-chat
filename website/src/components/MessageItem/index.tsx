import { memo } from 'react'

import {
  Container,
  MessageContainer,
  InfoContainer,
  SenderInitials,
  SenderName,
  DateTime,
  Message,
} from './styles'

export interface MessageItemProps {
  className?: string
  style?: React.CSSProperties
  message: string
  senderName: string
  datetime: string
  isFromCurrentUser?: boolean
}

export const MessageItem: React.FC<MessageItemProps> = memo(
  ({
    className,
    style,
    message,
    senderName,
    datetime,
    isFromCurrentUser = false,
  }) => {
    return (
      <Container
        className={className}
        style={style}
        isFromCurrentUser={isFromCurrentUser}
      >
        <MessageContainer>
          <InfoContainer>
            <SenderInitials text={senderName} />
            <SenderName>{senderName}</SenderName>
            <DateTime>{datetime}</DateTime>
          </InfoContainer>

          <Message>{message}</Message>
        </MessageContainer>
      </Container>
    )
  },
)

MessageItem.displayName = 'MessageItem'
