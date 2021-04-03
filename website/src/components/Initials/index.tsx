import React, { useMemo } from 'react'

import { Container } from './styles'

export interface InitialsProps {
  className?: string
  style?: React.CSSProperties
  text: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Initials: React.FC<InitialsProps> = (props) => {
  const { className, style, text, onClick } = props

  const initials = useMemo(() => {
    if (text && text.trim()) {
      const trimmedText = text.trim()
      const wordsArray = trimmedText.split(' ')

      if (wordsArray.length > 1) {
        const [firstWord, secondWord] = wordsArray
        return firstWord.charAt(0) + secondWord.charAt(0)
      }

      return trimmedText.charAt(0) + trimmedText.charAt(1)
    }

    return null
  }, [text])

  return (
    <Container className={className} style={style} onClick={onClick}>
      {initials}
    </Container>
  )
}
