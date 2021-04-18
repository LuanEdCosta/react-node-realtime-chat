import { useContext } from 'react'

import { ChatContext } from 'src/providers'

export const useChat = () => {
  return useContext(ChatContext)
}
