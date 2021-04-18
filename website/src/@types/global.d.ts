/* eslint-disable @typescript-eslint/no-unused-vars */

namespace GlobalTypes {
  interface User {
    id: string
    name: string
    status: string
  }

  interface Message {
    id: string
    text: string
    timestamp: number
    to: {
      id: string
    }
    from: {
      id: string
      name: string
    }
  }

  interface Conversation {
    messages: GlobalTypes.Message[]
  }

  interface Conversations {
    [socketId: string]: Conversation
  }

  namespace Common {
    type UserWithoutId = Omit<User, 'id'>
  }
}
