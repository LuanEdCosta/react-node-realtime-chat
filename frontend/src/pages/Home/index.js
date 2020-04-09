import React, { useState } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  const onSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      messageText: message,
      date: moment(),
      senderName: messageList.length % 2 === 0 ? 'You' : 'Deschamps',
    }

    setMessageList([...messageList, newMessage])
  }

  return (
    <Container>
      <ChatContainer>
        <MessagesContainer>
          {messageList.map((msg) => {
            const { messageText, date, senderName } = msg

            return (
              <Message
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
