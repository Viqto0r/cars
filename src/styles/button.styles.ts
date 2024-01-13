import { css } from '@emotion/react'
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
  padding: 6px;
`
const BUTTON_XLSMALL = css``
const BUTTON_XSMALL = css`
  width: 56px;
  height: 57px;
`
const BUTTON_SMALL = css`
  padding: 9px 26px;
`
const BUTTON_SMEDIUM = css`
  min-width: 126px;
`
const BUTTON_MEDIUM = css`
  padding: 19px 99px;
`
const BUTTON_LARGE = css`
  padding: 19px 34px;
`
export const BUTTON_MENU = css``
export const BUTTON_INNER = css``

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
    case 's-medium':
      return BUTTON_SMEDIUM
    case 'medium':
      return BUTTON_MEDIUM
    case 'large':
      return BUTTON_LARGE
  }
}

const getBtnType = (type: BtnType) => {
  switch (type) {
    case 'primary':
      return BUTTON_PRIMARY()
    case 'danger':
      return BUTTON_DANGER()
    case 'transparent':
      return BUTTON_TRANSPARENT()
  }
}

export const BUTTON = (type: BtnType, size: BtnSize) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  & img {
    margin-right: 7px;
  }
  ${getBtnSize(size)}
  ${getBtnType(type)}
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
  .css-${BUTTON_INNER.name} {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

const BUTTON_PRIMARY = () => {
  return css`
    color: ${WHITE};
    line-height: 18px;
    background-color: ${PRIMARY_DEFAULT};
    &:hover {
      background-color: ${PRIMARY_HOVER};
    }
    &:active {
      background-color: ${PRIMARY_ACTIVE};
    }
    &:disabled {
      background-color: ${PRIMARY_DISABLED};
      cursor: default;
      color: ${BLACK};
    }
  `
}

const BUTTON_DANGER = () => {
  return css`
    border: 2px solid ${DANGER_DEFAULT};
    color: ${DANGER_DEFAULT};
    background-color: ${WHITE};
    &:hover {
      background-color: ${DANGER_DEFAULT};
      border-color: ${DANGER_DEFAULT};
      color: ${WHITE};
    }
    &:active {
      background-color: ${DANGER_ACTIVE};
      border-color: ${DANGER_ACTIVE};
      color: ${WHITE};
    }
  `
}

const BUTTON_TRANSPARENT = () => {
  return css`
    background-color: ${TRANSPARENT};
  `
}
