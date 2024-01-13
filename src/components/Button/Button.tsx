import { FC, ReactNode, memo } from 'react'
import { BUTTON_INNER, BUTTON_MENU } from '../../styles/button.styles'
import { BtnSize, BtnType } from '../../types/types'
import { BUTTON } from '../../styles/button.styles'

interface IButtonProps {
  size: BtnSize
  type: BtnType
  text?: string
  icon?: ReactNode
  disabled?: boolean
  menu?: boolean
  onClick?: () => void
}

const Button: FC<IButtonProps> = ({
  text,
  type,
  size,
  disabled = false,
  onClick,
  menu,
  icon,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} css={BUTTON(type, size)}>
      {menu && (
        <span css={BUTTON_MENU}>
          <span></span>
        </span>
      )}
      <div css={BUTTON_INNER}>
        {icon}
        {text && <span>{text}</span>}
      </div>
    </button>
  )
}

export default memo(Button)
