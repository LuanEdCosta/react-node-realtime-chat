import { Container, UsersContainer, ChatContainer } from './styles'

export interface ChatLayoutProps {
  onlineUsersMenuComponent: React.ReactNode
  chatComponent: React.ReactNode
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({
  onlineUsersMenuComponent,
  chatComponent,
}) => {
  return (
    <Container>
      <UsersContainer>{onlineUsersMenuComponent}</UsersContainer>
      <ChatContainer>{chatComponent}</ChatContainer>
    </Container>
  )
}
