import {
  Container,
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
}

export const MessageItem: React.FC<MessageItemProps> = ({
  className,
  style,
  message,
  senderName,
  datetime,
}) => {
  return (
    <Container className={className} style={style}>
      <InfoContainer>
        <SenderInitials text={senderName} />
        <SenderName>{senderName}</SenderName>
        <DateTime>{datetime}</DateTime>
      </InfoContainer>

      <Message>{message}</Message>
    </Container>
  )
}
