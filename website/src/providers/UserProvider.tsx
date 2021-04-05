import { createContext, useMemo, useState } from 'react'

const useContextState = () => {
  const [user, setUser] = useState<GlobalTypes.User | null>(null)
  const isCurrentUserOnline = useMemo(() => !!user, [user])
  return { user, setUser, isCurrentUserOnline }
}

export type UserContextValue = ReturnType<typeof useContextState>

export const UserContext = createContext<UserContextValue>(
  {} as UserContextValue,
)

export const UserProvider: React.FC = ({ children }) => {
  const state = useContextState()
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
}

export const UserConsumer = UserContext.Consumer
