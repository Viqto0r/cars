import { FC, memo } from 'react'
import CardButtons from './CardButtons/CardButtons'
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
import { Car } from '../../graphql/generated'
import { SizesType } from '../../types/types'

interface ICardProps extends Omit<Car, 'description'> {
  size: SizesType
  description?: string
  isFavorite?: boolean
}

const Card: FC<ICardProps> = ({
  id,
  size,
  color,
  model,
  brand,
  price,
  img_src,
  model_year,
  availability,
  description,
  isFavorite = false,
}) => {
  return (
    <div css={CARD_WRAPPER(size, !availability)}>
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
        <div css={CARD_ACTIONS}>
          <CardButtons
            availability={availability}
            id={id}
            isFavorite={isFavorite}
            size={size}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Card)
