import React from 'react'

import { Container, SignInForm } from './styles'

const SignIn: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Container>
      <SignInForm onSubmit={handleSubmit} noValidate></SignInForm>
    </Container>
  )
}

export default SignIn
