import { css } from '@emotion/react'
import { GRAY, GRAY2, WHITE } from './variables.styles'
import { SizesType } from '../types/types'

export const CARD_IMG_WRAPPER = css``
export const CARD_TITLE = css``
export const CARD_IMG = css``
export const CARD_ACTIONS = css``
export const CARD_INFO = css``
export const CARD_PRICE = css``
export const CARD_SPECIFICATION = css``
export const CARD_DESCRIPTION = css``

export const CARD_WRAPPER = (type: SizesType, disabled: boolean) => {
  const isMedium = type === 'medium'
  return css`
    display: flex;
    flex-direction: ${isMedium ? 'column' : 'row'};
    gap: ${isMedium ? '20px' : '26px'};
    padding-bottom: ${!isMedium && '24px'};
    border-bottom: ${!isMedium && `1px solid ${GRAY2}`};

    .css-${CARD_IMG_WRAPPER.name} {
      position: relative;
      ${disabled &&
      `&:after {
			content: "Нет в наличии";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			padding: 15px 33px;
			border-radius: 15px;
			background-color: #000;
			font-size: 24px;
			line-height: 28px;
			font-weight: 500;
			color: ${WHITE};
			text-align: center;
			text-wrap: nowrap;
    }`};
    }
    .css-${CARD_INFO.name} {
      max-width: ${!isMedium && '810px'};
    }
    .css-${CARD_TITLE.name} {
      max-width: 434px;
      margin-bottom: ${isMedium ? '12px' : '16px'};
      font-size: ${isMedium ? '24px' : '36px'};
      line-height: ${isMedium ? '28px' : '42px'};
      font-weight: ${isMedium ? '500' : '700'};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .css-${CARD_IMG.name} {
      width: 100%;
      height: 310px;
      border-radius: ${isMedium ? '15px 15px 0px 0px' : '15px'};
      border: 1px solid #ccc;
      ${disabled && `opacity: 0.3`}
    }
    .css-${CARD_SPECIFICATION.name} {
      display: flex;
      flex-direction: ${isMedium ? 'row' : 'column'};
      gap: ${isMedium ? '14px' : '16px'};
      margin-bottom: ${isMedium ? '12px' : '33px'};
      font-size: 14px;
      line-height: 16px;
      color: ${GRAY};
    }
    .css-${CARD_DESCRIPTION.name} {
      margin: 0;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .css-${CARD_PRICE.name} {
      margin-bottom: 20px;
      font-weight: 500;
      font-size: ${isMedium ? '16px' : '33px'};
      line-height: ${isMedium ? '18px' : '28px'};
    }
    .css-${CARD_ACTIONS.name} {
      display: flex;
      align-items: center;
      gap: ${isMedium ? '25px' : '20px'};
    }
  `
}
