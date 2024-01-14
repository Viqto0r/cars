import { FC } from 'react'
import {
  FAFORITES_ICON_WRAPPER,
  FAFORITES_ICON,
  SEARCH_ICON_WRAPPER,
  SEARCH_ICON,
  TRASH_ICON_WRAPPER,
  TRASH_ICON,
} from '../../styles/icon.styles'
import { IconsType } from '../../types/types'

const getIconStyles = (type: IconsType) => {
  switch (type) {
    case 'favorites':
      return {
        wrapper: FAFORITES_ICON_WRAPPER,
        icon: FAFORITES_ICON,
      }
    case 'search':
      return {
        wrapper: SEARCH_ICON_WRAPPER,
        icon: SEARCH_ICON,
      }

    case 'trash':
      return {
        wrapper: TRASH_ICON_WRAPPER,
        icon: TRASH_ICON,
      }
  }
}

interface IIconProps {
  type: IconsType
  active?: boolean
  disabled?: boolean
  hover?: boolean
}

const Icon: FC<IIconProps> = ({
  type,
  active = false,
  disabled = false,
  hover = false,
}) => {
  const { wrapper, icon } = getIconStyles(type)

  return (
    <div css={wrapper(disabled, hover)}>
      <span css={icon(active, disabled)}></span>
    </div>
  )
}

export default Icon
