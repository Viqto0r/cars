import { FC } from 'react'
import {
  FAFORITES_ICON_WRAPPER,
  FAVORITES_ICON_LAYOUT,
  FAFORITES_ICON,
  SEARCH_ICON_WRAPPER,
  SEARCH_ICON_LAYOUT,
  SEARCH_ICON,
  TRASH_ICON_WRAPPER,
  TRASH_ICON_LAYOUT,
  TRASH_ICON,
} from '../../styles/icon.styles'
import { IconsType } from '../../types/types'

const getIconStyles = (type: IconsType) => {
  switch (type) {
    case 'favorites':
      return {
        wrapper: FAFORITES_ICON_WRAPPER,
        layout: FAVORITES_ICON_LAYOUT,
        icon: FAFORITES_ICON,
      }
    case 'search':
      return {
        wrapper: SEARCH_ICON_WRAPPER,
        layout: SEARCH_ICON_LAYOUT,
        icon: SEARCH_ICON,
      }

    case 'trash':
      return {
        wrapper: TRASH_ICON_WRAPPER,
        layout: TRASH_ICON_LAYOUT,
        icon: TRASH_ICON,
      }
  }
}

interface IIconProps {
  type: IconsType
  active?: boolean
}

const Icon: FC<IIconProps> = ({ active = false, type }) => {
  const { wrapper, layout, icon } = getIconStyles(type)

  return (
    <div css={wrapper(active)}>
      <span css={layout}></span>
      <span css={icon}></span>
    </div>
  )
}

export default Icon
