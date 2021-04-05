import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
import express from 'express'
import cors from 'cors'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(cors())

io.on('connection', (socket: Socket) => {
  console.log('Connected')
})

server.listen(3333)
