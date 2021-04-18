import { ChatProvider } from 'src/providers'

import { OnlineUsersMenu } from './OnlineUsersMenu'
import { ChatLayout } from './ChatLayout'
import { Container } from './styles'
import { Chat } from './Chat'

const Main: React.FC = () => {
  return (
    <ChatProvider>
      <Container>
        <ChatLayout
          chatComponent={<Chat />}
          onlineUsersMenuComponent={<OnlineUsersMenu />}
        />
      </Container>
    </ChatProvider>
  )
}

export default Main
