import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
import express from 'express'
import cors from 'cors'

import { User, Message, CLIENT_EVENTS, SERVER_EVENTS } from './types'

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

app.use(express.json())
app.use(cors())

const onlineUsers: { [socketId: string]: User } = {}

io.on('connection', (socket: Socket) => {
  socket.on(SERVER_EVENTS.CONNECT_TO_SERVER, (user: User) => {
    socket.broadcast.emit(CLIENT_EVENTS.USER_CONNECTED, {
      ...user,
      id: socket.id,
    })
    socket.emit(CLIENT_EVENTS.GET_ONLINE_USERS, onlineUsers)
    onlineUsers[socket.id] = user
  })

  socket.on(SERVER_EVENTS.SEND_MESSAGE, (message: Message) => {
    socket.emit(CLIENT_EVENTS.MESSAGE_RECEIVED, message)
    socket.to(message.to.id).emit(CLIENT_EVENTS.MESSAGE_RECEIVED, message)
  })

  socket.on(SERVER_EVENTS.DISCONNECT, () => {
    delete onlineUsers[socket.id]
    socket.broadcast.emit(CLIENT_EVENTS.USER_DISCONNECTED, socket.id)
  })
})

server.listen(3333)
