import { css } from '@emotion/react'
import { BLACK, BLUE, WHITE } from './variables.styles'

export const DROPDOWN_ACTIVE = css`
  display: flex;
  gap: 12px;
  margin-bottom: 2px;
  font-weight: 500;
  line-height: 18px;
`
export const DROPDOWN_LIST = css`
  position: absolute;
  left: 28px;
  width: 204px;
  background: ${WHITE};
  list-style: none;
  border: 1px solid ${BLACK};
  z-index: 5;
  & li {
    padding: 3px 28px 3px 4px;
    font-family: Arial;
    font-size: 14px;
    line-height: 16px;
  }
  & li:hover {
    background: ${BLUE};
    color: ${WHITE};
    cursor: pointer;
  }
`

export const DROPDOWN = css`
  position: relative;
  cursor: pointer;
`
