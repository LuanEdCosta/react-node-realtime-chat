import { useContext } from 'react'

import { UserContext } from 'src/providers'

export const useUser = () => {
  return useContext(UserContext)
}
