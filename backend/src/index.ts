import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
import express from 'express'
import cors from 'cors'

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

app.use(express.json())
app.use(cors())

enum SERVER_EVENTS {
  CONNECT = 'CONNECT',
  SEND_MESSAGE = 'SEND_MESSAGE',
  DISCONNECT = 'DISCONNECT',
}

enum CLIENT_EVENTS {
  USER_CONNECTED = 'USER_CONNECTED',
  USER_DISCONNECTED = 'USER_DISCONNECTED',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  GET_ONLINE_USERS = 'GET_ONLINE_USERS',
}

const onlineUsers: any = {}

io.on('connection', (socket: Socket) => {
  socket.on(SERVER_EVENTS.CONNECT, (user: any) => {
    socket.broadcast.emit(CLIENT_EVENTS.USER_CONNECTED, user)
    socket.emit(CLIENT_EVENTS.GET_ONLINE_USERS, onlineUsers)
    onlineUsers[socket.id] = user
  })

  socket.on(SERVER_EVENTS.SEND_MESSAGE, (content: any) => {
    const targetUserId = content.targetUser.id
    const message = content.message
    socket.to(targetUserId).emit(CLIENT_EVENTS.MESSAGE_RECEIVED, message)
  })

  socket.on(SERVER_EVENTS.DISCONNECT, () => {
    delete onlineUsers[socket.id]
    socket.broadcast.emit(CLIENT_EVENTS.USER_DISCONNECTED, socket.id)
  })
})

server.listen(3333)
