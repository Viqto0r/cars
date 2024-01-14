import { FC, memo } from 'react'
import { SPINNER } from '../../styles/spinner.styles'

interface ISpinner {
  fullscreen: boolean
}

const Spinner: FC<ISpinner> = ({ fullscreen }) => {
  return (
    <img css={SPINNER(fullscreen)} src="/icons/Spinner.svg" alt="loading" />
  )
}

export default memo(Spinner)
