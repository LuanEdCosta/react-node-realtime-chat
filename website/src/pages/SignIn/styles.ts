import styled from 'styled-components'

import { AccentButton, SnowInput } from 'src/components'

export const Container = styled.div`
  background: ${(props) => props.theme.snow};

  display: grid;
  place-items: center;

  height: 100%;

  padding: 1.6rem;
`

export const SignInForm = styled.form`
  background: ${(props) => props.theme.background};

  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1.6rem 0.1rem rgba(0, 0, 0, 0.1);

  width: 100%;
  max-width: 60rem;

  padding: 2.4rem;
`

export const Label = styled.label`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

  > *:not(:last-child) {
    margin-right: 0.8rem;
  }
`

export const TextInput = styled(SnowInput)`
  margin-bottom: 2.4rem;

  width: 100%;
`

export const SignInButton = styled(AccentButton)`
  width: 100%;
`
