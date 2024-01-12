import { FC, memo } from 'react'
import { MESSAGE } from '../../styles/message.styles'

interface MessageProps {
  text: string
  isError?: boolean
}

const Message: FC<MessageProps> = ({ text, isError = false }) => {
  return <p css={MESSAGE(isError)}>{text}</p>
}

export default memo(Message)
