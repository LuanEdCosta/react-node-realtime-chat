const express = require('express')
const cors = require('cors')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.json())
app.use(cors())

io.on('connection', (socket) => {
  socket.on('sendMessage', (data) => {
    console.log(JSON.stringify(data))
    socket.emit('receiveMessage', data)
  })
})

server.listen(3333)
