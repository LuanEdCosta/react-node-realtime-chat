import { useMemo, useState } from 'react'

import { OnlineUsersMenu } from './OnlineUsersMenu'
import { ChatLayout } from './ChatLayout'
import { Conversations } from './types'
import { Container } from './styles'
import { Chat } from './Chat'

const Main: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [conversations] = useState<Conversations>({})

  const currentConversation = useMemo(() => {
    if (!selectedUserId) return
    return conversations[selectedUserId]
  }, [conversations, selectedUserId])

  return (
    <Container>
      <ChatLayout
        chatComponent={
          <Chat
            selectedUserId={selectedUserId}
            currentConversation={currentConversation}
          />
        }
        onlineUsersMenuComponent={
          <OnlineUsersMenu
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
        }
      />
    </Container>
  )
}

export default Main
