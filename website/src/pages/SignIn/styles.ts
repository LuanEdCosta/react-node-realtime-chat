import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.snowDark};

  display: grid;
  place-items: center;

  height: 100%;
`

export const SignInForm = styled.form`
  background: ${(props) => props.theme.background};

  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1.6rem 0.1rem rgba(0, 0, 0, 0.1);

  width: 100%;
  max-width: 30%;
  min-width: 30rem;

  padding: 2.4rem;
`

export const Label = styled.label``

export const TextInput = styled.input``

export const SignInButton = styled.button``
