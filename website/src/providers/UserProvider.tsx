import { createContext, useMemo, useState } from 'react'

type CurrentUser = GlobalTypes.Common.UserWithoutId | null

const useContextState = () => {
  const [user, setUser] = useState<CurrentUser>(null)
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
