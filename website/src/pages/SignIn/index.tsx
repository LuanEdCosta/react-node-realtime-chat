import React, { useRef } from 'react'
import { FiFileText, FiLogIn, FiUser } from 'react-icons/fi'

import { useUser } from 'src/hooks'

import { Container, SignInForm, Label, TextInput, SignInButton } from './styles'

const SignIn: React.FC = () => {
  const { setUser } = useUser()

  const nameRef = useRef<HTMLInputElement | null>(null)
  const statusRef = useRef<HTMLInputElement | null>(null)

  const getValues = () => ({
    name: nameRef.current?.value || '',
    status: statusRef.current?.value || '',
  })

  const handleValidation = (): boolean => {
    const { name, status } = getValues()

    if (name.trim().length === 0) {
      nameRef.current?.focus()
      return false
    }

    if (status.trim().length === 0) {
      statusRef.current?.focus()
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (handleValidation()) {
      const { name, status } = getValues()

      setUser({
        id: new Date().getTime().toString(),
        name,
        status,
      })
    }
  }

  return (
    <Container>
      <SignInForm onSubmit={handleSubmit} noValidate>
        <Label htmlFor="name">
          <FiUser />
          <span>Your Name</span>
        </Label>

        <TextInput
          ref={nameRef}
          id="name"
          name="name"
          placeholder="Ex: Luan Eduardo"
        />

        <Label htmlFor="status">
          <FiFileText />
          <span>Your Status</span>
        </Label>

        <TextInput
          ref={statusRef}
          id="status"
          name="status"
          placeholder="Ex: I like music and programming"
        />

        <SignInButton type="submit">
          <span>Continue</span>
          <FiLogIn />
        </SignInButton>
      </SignInForm>
    </Container>
  )
}

export default SignIn
