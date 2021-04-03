import { OnlineUsersMenu } from './OnlineUsersMenu'
import { ChatLayout } from './ChatLayout'
import { Container } from './styles'
import { Chat } from './Chat'

const Main: React.FC = () => {
  return (
    <Container>
      <ChatLayout
        chatComponent={<Chat />}
        onlineUsersMenuComponent={<OnlineUsersMenu />}
      />
    </Container>
  )
}

export default Main
