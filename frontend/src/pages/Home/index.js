import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
import io from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REALTIME_SERVER_URL } from '../../services/Server'
import Message from '../../components/Message'
import {
  Container,
  ChatContainer,
  MessagesContainer,
  InputContainer,
  SendButton,
  Input,
} from './styles'

const Home = () => {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')
  const [serverConn, setServerConn] = useState({})

  const onSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      messageText: message,
      date: moment(),
      senderName: 'You',
      senderId: serverConn.id,
    }

    serverConn.emit('sendMessage', newMessage)
    setMessageList([...messageList, newMessage])
  }

  const onSubscribeToServer = useCallback(() => {
    const server = io.connect(REALTIME_SERVER_URL)

    server.on('connect', () => {})

    server.on('receiveMessage', (newMessage) => {
      setMessageList([...messageList, newMessage])
    })

    setServerConn(server)

    return () => {
      serverConn.close()
    }
  }, [messageList, serverConn])

  useEffect(onSubscribeToServer, [])

  return (
    <Container>
      <ChatContainer>
        <MessagesContainer>
          {messageList.map((msg) => {
            const { messageText, date, senderName } = msg

            return (
              <Message
                key={moment(date).get('milliseconds')}
                senderName={senderName}
                messageText={messageText}
                date={date}
                isRightSideMessage={senderName === 'You'}
              />
            )
          })}
        </MessagesContainer>

        <InputContainer>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
          />

          <SendButton onClick={onSendMessage}>
            <FontAwesomeIcon icon="paper-plane" />
          </SendButton>
        </InputContainer>
      </ChatContainer>
    </Container>
  )
}

export default Home
