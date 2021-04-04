import { Container, Icon, Message } from './styles'

export interface PlaceholderProps {
  className?: string
  style?: React.CSSProperties
  message: string
  iconComponent: React.ReactNode
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  className,
  style,
  iconComponent,
  message,
}) => {
  return (
    <Container className={className} style={style}>
      <Icon>{iconComponent}</Icon>
      <Message>{message}</Message>
    </Container>
  )
}
