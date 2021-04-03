import styled from 'styled-components'

export const Container = styled.div`
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  width: 5rem;
  height: 5rem;

  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;

  color: ${(props) => props.theme.primaryText};
  background: transparent;
`
