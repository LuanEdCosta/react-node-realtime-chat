import { createContext, useEffect, useMemo, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import { CLIENT_EVENTS, SERVER_EVENTS } from 'src/configs'
import { useUser } from 'src/hooks'

const useContextState = () => {
  const { user } = useUser()

  const [socket, setSocket] = useState<Socket | null>(null)
  const [onlineUsers, setOnlineUsers] = useState<GlobalTypes.User[]>([])
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [conversations, setConversations] = useState<GlobalTypes.Conversations>(
    {},
  )

  const currentConversation = useMemo(() => {
    if (!selectedUserId) return
    return conversations[selectedUserId]
  }, [conversations, selectedUserId])

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL || '')
    setSocket(socket)

    socket.emit(SERVER_EVENTS.CONNECT_TO_SERVER, user)

    socket.on(CLIENT_EVENTS.USER_CONNECTED, (newUser) => {
      setOnlineUsers((currentOnlineUsers) => [...currentOnlineUsers, newUser])
    })

    socket.on(CLIENT_EVENTS.USER_DISCONNECTED, (userId: string) => {
      setOnlineUsers((currentOnlineUsers) => {
        return currentOnlineUsers.filter((user) => user.id !== userId)
      })

      setConversations((currentConversations) => {
        const currentConversationsClone = { ...currentConversations }
        delete currentConversationsClone[userId]
        return currentConversationsClone
      })

      setSelectedUserId((currentSelectedUserId) => {
        const isTheSelectedUserId = currentSelectedUserId === userId
        return isTheSelectedUserId ? null : currentSelectedUserId
      })
    })

    socket.on(CLIENT_EVENTS.GET_ONLINE_USERS, (serverOnlineUsers) => {
      const onlineUserIds = Object.keys(serverOnlineUsers)
      const onlineUsersArray = onlineUserIds.map((id) => ({
        ...serverOnlineUsers[id],
        id,
      }))

      setOnlineUsers(onlineUsersArray)
    })

    socket.on(CLIENT_EVENTS.MESSAGE_RECEIVED, (message) => {
      setConversations((currentConversations) => {
        const isCurrentUserMessage = message.from.id === socket?.id
        const conversationId = isCurrentUserMessage
          ? message.to.id
          : message.from.id

        const conversation = currentConversations[conversationId]
        const messagesClone = conversation ? [...conversation.messages] : []
        messagesClone.push(message)

        return {
          ...currentConversations,
          [conversationId]: {
            ...conversation,
            messages: messagesClone,
          },
        }
      })
    })

    return () => {
      socket.disconnect()
      setSocket(null)
      setOnlineUsers([])
      setConversations({})
      setSelectedUserId(null)
    }
  }, [user])

  return {
    selectedUserId,
    setSelectedUserId,
    onlineUsers,
    setOnlineUsers,
    conversations,
    setConversations,
    currentConversation,
    socket,
  }
}

export type ChatContextValue = ReturnType<typeof useContextState>

export const ChatContext = createContext<ChatContextValue>(
  {} as ChatContextValue,
)

export const ChatProvider: React.FC = ({ children }) => {
  const state = useContextState()
  return <ChatContext.Provider value={state}>{children}</ChatContext.Provider>
}
