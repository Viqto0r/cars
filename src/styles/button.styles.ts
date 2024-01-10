import { css } from '@emotion/react'
import { IIcons } from './../components/Button/Button'
import { BtnSize, BtnType } from '../types/types'
import {
  BLACK,
  WHITE,
  TRANSPARENT,
  DANGER_ACTIVE,
  DANGER_DEFAULT,
  PRIMARY_ACTIVE,
  PRIMARY_DEFAULT,
  PRIMARY_DISABLED,
  PRIMARY_HOVER,
} from './variables.styles'

const BUTTON_XXLSMALL = css`
  width: 27px;
  height: 24px;
`
const BUTTON_XLSMALL = css`
  width: 27px;
  height: 27px;
`
const BUTTON_XSMALL = css`
  padding: 9px 26px;
`
const BUTTON_SMALL = css`
  width: 56px;
  height: 57px;
`
const BUTTON_MEDIUM = css`
  padding: 19px 99px;
`
const BUTTON_LARGE = css`
  padding: 19px 34px;
`
export const BUTTON_MENU = css``
export const BUTTON_LABEL = css``

const getBackground = (color: string, icon: string) =>
  css`
    background: ${color} url(${icon}) no-repeat center;
  `

const getBtnSize = (size: BtnSize) => {
  switch (size) {
    case 'xxl-small':
      return BUTTON_XXLSMALL
    case 'xl-small':
      return BUTTON_XLSMALL
    case 'x-small':
      return BUTTON_XSMALL
    case 'small':
      return BUTTON_SMALL
    case 'medium':
      return BUTTON_MEDIUM
    case 'large':
      return BUTTON_LARGE
  }
}

const getBtnType = (type: BtnType, icons: IIcons, active: boolean) => {
  switch (type) {
    case 'primary':
      return BUTTON_PRIMARY(icons, active)
    case 'danger':
      return BUTTON_DANGER(icons, active)
    case 'transparent':
      return BUTTON_TRANSPARENT(icons, active)
  }
}

const getIconState = (icons: IIcons, active: boolean) => {
  let defIcon = icons.default
  let actIcon = icons.active

  active && ([defIcon, actIcon] = [actIcon, defIcon])
  return [defIcon, actIcon]
}

export const BUTTON = (
  type: BtnType,
  size: BtnSize,
  icons: IIcons,
  active: boolean
) => css`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  color: ${WHITE};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  & img {
    margin-right: 7px;
  }
  ${getBtnSize(size)}
  ${getBtnType(type, icons, active)}
	.css-${BUTTON_MENU.name} {
    display: flex;
    align-items: center;
    width: 12px;
    height: 12px;
    margin-right: 7px;
    & span {
      background: ${WHITE};
      position: relative;
      display: block;
      width: 100%;
      height: 2px;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background: ${WHITE};
      }
      &:before {
        top: -5px;
      }
      &:after {
        top: 5px;
      }
    }
  }
  .css-${BUTTON_LABEL.name} {
    margin-left: 39px;
  }
`

const BUTTON_PRIMARY = (icons: IIcons, active: boolean) => {
  const [defIcon, actIcon] = getIconState(icons, active)

  return css`
	${getBackground(PRIMARY_DEFAULT, defIcon)}
	&:hover{${getBackground(PRIMARY_HOVER, icons.hover)}}
	&:active{${getBackground(PRIMARY_ACTIVE, actIcon)}}
	&:disabled{${getBackground(
    PRIMARY_DISABLED,
    icons.disabled
  )};cursor:default;color:${BLACK}}}
	`
}

const BUTTON_DANGER = (icons: IIcons, active: boolean) => {
  const [defIcon, actIcon] = getIconState(icons, active)
  return css`
    border: 2px solid ${DANGER_DEFAULT};
    color: ${DANGER_DEFAULT};
    ${getBackground(WHITE, defIcon)}
    &:hover {
      ${getBackground(DANGER_DEFAULT, icons.hover)}
      border-color:${DANGER_DEFAULT}
			color:${WHITE}
    }
    &:active {
      ${getBackground(DANGER_ACTIVE, actIcon)}
      border-color:${DANGER_ACTIVE}
			color:${WHITE}
    }
  `
}

const BUTTON_TRANSPARENT = (icons: IIcons, active: boolean) => {
  const [defIcon, actIcon] = getIconState(icons, active)

  return css`
    ${getBackground(TRANSPARENT, defIcon)};
    color: ${BLACK};
    &:hover {
      ${getBackground(TRANSPARENT, icons.hover)}
    }
    &:active {
      ${getBackground(TRANSPARENT, actIcon)}
    }
    &:disabled {
      ${getBackground(TRANSPARENT, icons.disabled)}
    }
  `
}
