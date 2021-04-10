export interface User {
  name: string
  status: string
}

export interface Message {
  id: string
  text: string
  timestamp: number
  to: {
    id: string
  }
  from: {
    id: string
  }
}

export enum SERVER_EVENTS {
  CONNECT = 'CONNECT',
  SEND_MESSAGE = 'SEND_MESSAGE',
  DISCONNECT = 'DISCONNECT',
}

export enum CLIENT_EVENTS {
  USER_CONNECTED = 'USER_CONNECTED',
  USER_DISCONNECTED = 'USER_DISCONNECTED',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  GET_ONLINE_USERS = 'GET_ONLINE_USERS',
}
