import styled from 'styled-components'

export const SnowInput = styled.input`
  outline: none;
  border: none;
  border-radius: 1rem;

  height: 5rem;
  padding: 0 1.6rem;

  background: ${(props) => props.theme.snow};
`
