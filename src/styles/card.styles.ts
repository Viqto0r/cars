import { css } from '@emotion/react'
import { GRAY, GRAY2, WHITE } from './variables.styles'
import { SizesType } from '../types/types'

export const CARD_IMG_WRAPPER = css`
  position: relative;
`

export const CARD_NOT_AVAIBLE = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: #000;
  padding: 15px 33px;
  line-height: 28px;
  font-size: 24px;
  font-weight: 500;
  color: ${WHITE};
  text-align: center;
  text-wrap: nowrap;
`

export const CARD_TITLE = (isMedium: boolean) => css`
  max-width: ${isMedium ? '434px' : 'auto'};
  overflow: hidden;
  margin-bottom: ${isMedium ? '12px' : '16px'};
  font-size: ${isMedium ? '24px' : '36px'};
  line-height: ${isMedium ? '28px' : '42px'};
  font-weight: ${isMedium ? '500' : '700'};
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const CARD_IMG = (isMedium: boolean, disabled: boolean) => css`
  width: 100%;
  height: 310px;
  border: 1px solid #ccc;
  border-radius: ${isMedium ? '15px 15px 0px 0px' : '15px'};
  ${disabled && `opacity: 0.3`}
`
export const CARD_ACTIONS = (isMedium: boolean) => css`
  display: flex;
  align-items: center;
  gap: ${isMedium ? '25px' : '20px'};
`
export const CARD_INFO = (isMedium: boolean) => css`
  max-width: ${!isMedium && '810px'};
`
export const CARD_PRICE = (isMedium: boolean) => css`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: ${isMedium ? '16px' : '33px'};
  line-height: ${isMedium ? '18px' : '28px'};
`
export const CARD_SPECIFICATION = (isMedium: boolean) => css`
  display: flex;
  flex-direction: ${isMedium ? 'row' : 'column'};
  gap: ${isMedium ? '14px' : '16px'};
  margin-bottom: ${isMedium ? '12px' : '33px'};
  font-size: 14px;
  line-height: 16px;
  color: ${GRAY};
`
export const CARD_DESCRIPTION = css`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CARD_WRAPPER = (type: SizesType) => {
  const isMedium = type === 'medium'
  return css`
    display: flex;
    flex-direction: ${isMedium ? 'column' : 'row'};
    gap: ${isMedium ? '20px' : '26px'};
    border-bottom: ${!isMedium && `1px solid ${GRAY2}`};
    padding-bottom: ${!isMedium && '24px'};
  `
}
