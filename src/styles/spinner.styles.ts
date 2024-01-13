import { css } from '@emotion/react'
export const SPINNER = (fullscreen: boolean) =>
  css`
    position: ${fullscreen ? 'absolute' : 'relative'};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${fullscreen ? '200px' : '40px'};
    height: ${fullscreen ? '200px' : '40px'};
  `
