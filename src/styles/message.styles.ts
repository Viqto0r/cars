import { css } from '@emotion/react'

export const MESSAGE = (isError: boolean) =>
  css`
    ${isError &&
    `color:red;
		font-size:50px;
		text-align:center
		`}
  `
