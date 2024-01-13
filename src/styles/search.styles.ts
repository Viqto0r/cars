import { css } from '@emotion/react'
import { GRAY2 } from './variables.styles'

export const SEARCH_INPUT = css``
export const SEARCH = css`
  display: flex;
  gap: 4px;
  width: 445px;
  height: 36px;
  padding: 4px 4px 4px 10px;
  border: 1px solid ${GRAY2};
  border-radius: 5px;
  font-size: 14px;
  &: focus-within {
    outline: 1px solid black;
  }
  .css-${SEARCH_INPUT.name} {
    width: 100%;
    border: none;
    &::placeholder {
      color: ${GRAY2};
    }
    &:focus {
      outline: none;
    }
  }
`
