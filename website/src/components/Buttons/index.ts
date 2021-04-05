import styled from 'styled-components'

export const AccentButton = styled.button`
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

  height: 6rem;
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
