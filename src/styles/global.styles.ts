/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  } as const,
  'html, body, #root': {
    height: '100%',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    boxSizing: 'border-box' as 'border-box',
  },
}