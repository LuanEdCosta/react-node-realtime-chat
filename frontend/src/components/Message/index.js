import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Container, SenderName, MessageText, MessageDate } from './styles'

const Message = (props) => {
  const { senderName, messageText, date, isRightSideMessage } = props

  return (
    <Container isRightSideMessage={isRightSideMessage}>
      <SenderName>{senderName}</SenderName>
      <MessageText>{messageText}</MessageText>
      <MessageDate>{moment(date).format('LL')}</MessageDate>
    </Container>
  )
}

Message.defaultProps = {
  isRightSideMessage: false,
}

Message.propTypes = {
  date: PropTypes.string.isRequired,
  isRightSideMessage: PropTypes.bool,
  messageText: PropTypes.string.isRequired,
  senderName: PropTypes.string.isRequired,
}

export default Message
