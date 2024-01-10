import { css } from '@emotion/react'
import { BLACK, BLUE, WHITE } from './variables.styles'

export const DROPDOWN_ACTIVE = css``
export const DROPDOWN_LIST = css``

export const DROPDOWN = css`
  position: relative;
  cursor: pointer;
  .css-${DROPDOWN_ACTIVE.name} {
    display: flex;
    gap: 12px;
    font-weight: 500;
    margin-bottom: 2px;
    line-height: 18px;
  }
  .css-${DROPDOWN_LIST.name} {
    position: absolute;
    left: 28px;
    width: 204px;
    z-index: 5;
    background: ${WHITE};
    list-style: none;
    border: 1px solid ${BLACK};
    & li: {
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
  }
`
