export interface Conversation {
  messages: GlobalTypes.Message[]
}

export interface Conversations {
  [userId: string]: Conversation
}
