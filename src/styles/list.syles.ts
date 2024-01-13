import { css } from '@emotion/react'
import { ListType } from '../types/types'

export const LIST = (style: ListType) => {
  if (style === 'column') {
    return css`
      display: flex;
      flex-direction: column;
      gap: 27px;
      padding: 64px 40px 130px;
    `
  }
  return css`
    display: grid;
    grid-template-columns: repeat(auto-fit, 445px);
    gap: 73px 20px;
    padding: 40px;
  `
}
