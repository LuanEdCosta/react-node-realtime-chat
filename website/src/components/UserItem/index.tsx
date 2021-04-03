import React from 'react'

import { Container, NameInitials, Content, Name, Status } from './styles'

export interface UserItemProps {
  className?: string
  style?: React.CSSProperties
  name: string
  status: string
  isSelected?: boolean
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export const UserItem: React.FC<UserItemProps> = ({
  className,
  style,
  name,
  status,
  isSelected = false,
  isDisabled = false,
  onClick,
}) => {
  return (
    <Container
      className={className}
      style={style}
      isSelected={isSelected}
      onClick={isDisabled ? undefined : onClick}
    >
      <NameInitials text={name} />

      <Content>
        <Name>{name}</Name>
        <Status>{status}</Status>
      </Content>
    </Container>
  )
}
