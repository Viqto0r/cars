import { css } from '@emotion/react'

const getIconName = (active: boolean, disabled: boolean, iconType: string) => {
  if (disabled) {
    return `${iconType}-Disabled.svg`
  } else if (active) {
    return `${iconType}-Active.svg`
  } else {
    return `${iconType}-Default.svg`
  }
}

const WRAPPER = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const ICON = (width: string, heigth: string, iconName: string) => {
  return css`
    display: inline-block;
    width: ${width};
    height: ${heigth};
    position: relative;
    background-image: url(/icons/${iconName});
  `
}

const getHoverStyles = (
  disabled: boolean,
  hover: boolean,
  IconsType: string
) => {
  let styles = ``
  if (disabled) return styles
  if (hover) {
    styles += `&:hover > span {
      background-image: url(/icons/${IconsType}-Hover.svg);
    }`
  }
  styles += `&:active > span {
    background-image: url(/icons/${IconsType}-Active.svg);
  }`

  return styles
}

export const FAFORITES_ICON = (active: boolean, disabled: boolean) => {
  const iconName = getIconName(active, disabled, 'Favorite')

  return css`
    ${ICON('27px', '24px', iconName)};
  `
}

export const FAFORITES_ICON_WRAPPER = (disabled: boolean, hover: boolean) => {
  return css`
    ${WRAPPER};
    ${getHoverStyles(disabled, hover, 'Favorite')}
    &:disabled > span {
      background-image: url(/icons/Favorite-Disabled.svg);
    }
  `
}

export const TRASH_ICON = () => css`
  ${ICON('18px', '19px', 'Delete-Default.svg')};
`

export const TRASH_ICON_WRAPPER = (disabled: boolean) => {
  return css`
    ${WRAPPER};
    ${!disabled &&
    `&:hover span {
        background-image: url(/icons/Delete-Hover.svg);
      }`}
  `
}

export const SEARCH_ICON = () => css`
  ${ICON('12px', '12px', 'Search.svg')};
`

export const SEARCH_ICON_WRAPPER = () => {
  return css`
    ${WRAPPER};
    line-height: 0;
    font-size: 0px;
  `
}
