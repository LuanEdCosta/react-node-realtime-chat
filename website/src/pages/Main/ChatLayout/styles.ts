import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.background};

  display: grid;
  grid-template-areas: 'users chat';
  grid-template-rows: 1fr;
  grid-template-columns: 40rem 1fr;

  width: 100%;
  height: 100%;
  max-width: 140rem;

  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1.6rem 0.1rem rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 968px) {
    grid-template-areas: 'users' 'chat';
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`

export const UsersContainer = styled.div`
  grid-area: users;
  overflow: hidden;
`

export const ChatContainer = styled.div`
  grid-area: chat;
  overflow: hidden;
`
