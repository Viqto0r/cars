import { FC } from 'react'
import { BUTTON, BUTTON_LABEL, BUTTON_MENU } from '../../styles/button.styles'
import { BtnSize, BtnType } from '../../types/types'

export interface IIcons {
  default: string
  hover: string
  active: string
  disabled: string
}

export interface ButtonProps {
  text?: string
  size: BtnSize
  type: BtnType
  icons?: IIcons
  disabled?: boolean
  active?: boolean
  menu?: boolean
  label?: string
  onClick: () => void
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  size,
  icons = { active: '', default: '', disabled: '', hover: '' },
  disabled = false,
  onClick,
  active = false,
  label,
  menu,
}) => {
  return (
    <button
      css={BUTTON(type, size, icons, active)}
      disabled={disabled}
      onClick={onClick}
    >
      <>
        {menu && (
          <span css={BUTTON_MENU}>
            <span></span>
          </span>
        )}
        <span>{text}</span>
        {label && <span css={BUTTON_LABEL}>{label}</span>}
      </>
    </button>
  )
}

export default Button
