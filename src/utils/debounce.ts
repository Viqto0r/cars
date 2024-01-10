import { ChangeEvent } from 'react'

export const debounce = (
  fn: (e: ChangeEvent<HTMLInputElement>) => void,
  delay: number
) => {
  let timeout: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(fn.bind(this, ...args), delay)
  }
}
