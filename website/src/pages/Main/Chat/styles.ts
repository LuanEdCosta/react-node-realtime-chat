import styled from 'styled-components'

import { DefaultScrollBar } from 'src/styles'

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const MessagesContainer = styled.div`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;
  ${DefaultScrollBar};
`

export const MessageForm = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 1.6rem;
`

export const MessageInput = styled.input`
  flex: 1;

  outline: none;
  border: none;
  border-radius: 1rem;

  height: 5rem;
  padding: 0 1.6rem;

  background: ${(props) => props.theme.snow};
`

export const SendMessageButton = styled.button`
  outline: none;
  border: none;
  border-radius: 1rem;

  background: ${(props) => props.theme.accent};
  color: white;

  font-size: 1.8rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  min-width: 15rem;
  margin-left: 1.6rem;
  padding: 0 1.6rem;

  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.accentDark};
  }

  > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`
