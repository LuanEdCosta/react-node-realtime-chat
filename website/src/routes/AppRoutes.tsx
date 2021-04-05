import { useUser } from 'src/hooks'
import Main from 'src/pages/Main'
import SignIn from 'src/pages/SignIn'

export const AppRoutes: React.FC = () => {
  const { isCurrentUserOnline } = useUser()
  return isCurrentUserOnline ? <Main /> : <SignIn />
}
