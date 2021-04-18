import { FiUser } from 'react-icons/fi'

import { Placeholder } from 'src/components'
import { useChat } from 'src/hooks'

import { Container, User, PlaceholderContainer } from './styles'

export const OnlineUsersMenu: React.FC = () => {
  const { onlineUsers, selectedUserId, setSelectedUserId } = useChat()

  return (
    <Container>
      {onlineUsers.map((user) => {
        const isSelected = selectedUserId === user.id

        const handleSelectThisUser = () => {
          setSelectedUserId(isSelected ? null : user.id)
        }

        return (
          <User
            key={user.id}
            name={user.name}
            status={user.status}
            isSelected={isSelected}
            onClick={handleSelectThisUser}
          />
        )
      })}

      {onlineUsers.length === 0 && (
        <PlaceholderContainer>
          <Placeholder
            iconComponent={<FiUser />}
            message="You Are Alone Here"
          />
        </PlaceholderContainer>
      )}
    </Container>
  )
}
