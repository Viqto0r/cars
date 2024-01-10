import { css } from '@emotion/react'
import { GRAY2 } from './variables.styles'

export const FAVORITES_TITLE = css``
export const FAVORITES_LIST = css``

export const FAFORITES = css`
  .css-${FAVORITES_TITLE.name} {
	font-size: 48px;
  font-weight: 700;
  padding: 46px 40px 26px;
	1px solid ${GRAY2};
  }
	.css-${FAVORITES_LIST.name} {
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding-top: 64px;
	padding-bottom:130px;
	}
`
