import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.secondaryText};
`

export const Icon = styled.div`
  height: 8rem;
  width: 8rem;

  font-size: 4rem;

  border-radius: 100%;

  margin-bottom: 1.6rem;

  background: ${(props) => props.theme.snow};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Message = styled.div`
  text-align: center;
`
