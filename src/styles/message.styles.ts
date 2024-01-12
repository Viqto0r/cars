import { css } from '@emotion/react'

export const MESSAGE = (isError: boolean) =>
  css`
    ${isError && 'color:red'}
  `
