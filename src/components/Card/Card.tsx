import { FC, ReactElement } from 'react'
import {
  CARD_ACTIONS,
  CARD_DESCRIPTION,
  CARD_IMG,
  CARD_IMG_WRAPPER,
  CARD_INFO,
  CARD_PRICE,
  CARD_SPECIFICATION,
  CARD_TITLE,
  CARD_WRAPPER,
} from '../../styles/card.styles'
import { getImgSrc } from '../../api/helpers'

interface CardProps {
  type: 'medium' | 'large'
  id: number
  brand: string
  model: string
  color: string
  model_year: number
  img_src: string
  price: string
  availability: boolean
  description?: string
  buttons: ReactElement[]
}

const Card: FC<CardProps> = ({
  type,
  color,
  model,
  brand,
  price,
  img_src,
  model_year,
  availability,
  buttons,
  description,
}) => {
  return (
    <div css={CARD_WRAPPER(type, !availability)}>
      <div css={CARD_IMG_WRAPPER}>
        <img
          src={getImgSrc(img_src) ?? undefined}
          alt={`${brand} ${model}`}
          css={CARD_IMG}
        />
      </div>

      <div css={CARD_INFO}>
        <div css={CARD_TITLE}>
          {brand} {model}
        </div>
        <div css={CARD_SPECIFICATION}>
          {description && <p css={CARD_DESCRIPTION}>{description}</p>}
          <span>Год: {model_year}</span>
          <span>Цвет: {color}</span>
        </div>
        <div css={CARD_PRICE}> от {price}</div>
        <div css={CARD_ACTIONS}>{buttons}</div>
      </div>
    </div>
  )
}

export default Card
