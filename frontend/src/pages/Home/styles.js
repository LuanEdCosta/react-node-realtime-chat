import styled from 'styled-components'
import { ScrollStyle01 } from '../../styles/Scrollbars'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChatContainer = styled.div`
  height: 80vh;
  max-height: 80vh;
  min-height: 400px;
  width: 60vw;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.chatBackground};
`

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  ${ScrollStyle01}
`

export const InputContainer = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  background: ${({ theme }) => theme.inputContainer};
`

export const Input = styled.input`
  border-radius: 100px;
  border: none;
  height: 50px;
  padding: 0 24px;
  flex: 1;
  margin-right: 24px;
`

export const SendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  border: 2px solid transparent;
  &:hover {
    background-color: ${({ theme }) => theme.accentDark};
  }
`
