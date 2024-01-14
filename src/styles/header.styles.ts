import { css } from '@emotion/react'
import { BLACK, GRAY2 } from './variables.styles'

export const HEADER = css`
  border-bottom: 1px solid ${GRAY2};
`
export const HEADER_INNER = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 17px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: ${BLACK};
  text-wrap: nowrap;
`

export const HEADER_LEFT_SIDE = css`
  display: flex;
  gap: 21px;
`

export const HEADER_RIGHT_SIDE = css`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  max-width: 742px;
  width: 100%;
`

export const HEADER_PHONE = css`
  color: ${BLACK};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
export const HEADER_CONTACTS = css`
  display: flex;
  gap: 31px;
  font-style: normal;
`
