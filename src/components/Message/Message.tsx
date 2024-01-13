import { FC, memo } from 'react'
import { MESSAGE } from '../../styles/message.styles'

interface IMessageProps {
  text: string
  isError?: boolean
}

const Message: FC<IMessageProps> = ({ text, isError = false }) => {
  return <p css={MESSAGE(isError)}>{text}</p>
}

export default memo(Message)
