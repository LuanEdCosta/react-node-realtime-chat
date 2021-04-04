import { FiUser } from 'react-icons/fi'

import { Placeholder } from 'src/components'

import { Container, User, PlaceholderContainer } from './styles'

export interface OnlineUsersMenuProps {
  selectedUserId: string | null
  setSelectedUserId: Helpers.ReactState<string | null>
}

export const OnlineUsersMenu: React.FC<OnlineUsersMenuProps> = ({
  selectedUserId,
  setSelectedUserId,
}) => {
  const onlineUsers: GlobalTypes.User[] = []

  return (
    <Container>
      {onlineUsers.map((user) => {
        const isSelected = selectedUserId === user.id

        const handleSelectThisUser = () => {
          if (isSelected) return
          setSelectedUserId(user.id)
        }

        return (
          <User
            key={user.id}
            name={user.name}
            status={user.status}
            isSelected={isSelected}
            isDisabled={isSelected}
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
