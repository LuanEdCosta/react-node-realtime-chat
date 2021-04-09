/* eslint-disable @typescript-eslint/no-unused-vars */

namespace GlobalTypes {
  interface User {
    id: string
    name: string
    status: string
  }

  interface Message {
    id: string
    message: string
    timestamp: number
    sender: {
      id: string
      name: string
    }
  }

  namespace Common {
    type UserWithoutId = Omit<User, 'id'>
  }
}
