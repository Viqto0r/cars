import { css } from '@emotion/react'
import { BLACK, GRAY2 } from './variables.styles'

export const HEADER_PHONE = css``
export const HEADER_LOGO = css``
export const HEADER_CONTACTS = css``

export const HEADER = css`
  display: flex;
  align-items: center;
  padding: 17px 40px;
  border-bottom: 1px solid ${GRAY2};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: ${BLACK};
  text-wrap: nowrap;
  .css-${HEADER_PHONE.name} {
    color: ${BLACK};
    text-decoration: none;
    margin: 0 136px 0 31px;
    &:hover {
      text-decoration: underline;
    }
  }
  .css-${HEADER_LOGO.name} {
    margin-right: 21px;
  }
  .css-${HEADER_CONTACTS.name} {
    display: flex;
    margin-left: 806px;
    font-style: normal;
  }
`
