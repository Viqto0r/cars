import { FC, memo, useCallback } from 'react'
import { toggleFavorites } from '../../../store/slices/favoritesCarsIdsSlice'
import { useAppDispatch } from '../../../store/hooks'
import { SizesType } from '../../../types/types'
import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'

interface ICardBtnsProps {
  id: number
  disabled: boolean
  isFavorite: boolean
  size: SizesType
}

const CardBtns: FC<ICardBtnsProps> = ({ isFavorite, id, size, disabled }) => {
  const dispatch = useAppDispatch()
  const handleClick = useCallback(() => {
    dispatch(toggleFavorites(id))
  }, [toggleFavorites, dispatch])

  if (size === 'medium') {
    return (
      <>
        <Button
          size="medium"
          type="primary"
          text="Купить"
          disabled={disabled}
        />
        <Button
          size="xl-small"
          type="transparent"
          icon={
            <Icon
              type="favorites"
              active={isFavorite}
              disabled={disabled}
              hover
            />
          }
          onClick={handleClick}
          disabled={disabled}
        />
      </>
    )
  }

  return (
    <>
      <Button
        size="large"
        type="primary"
        text="Выбрать комплектацию"
        disabled={disabled}
      />
      <Button
        size="x-small"
        type="danger"
        icon={<Icon type="trash" disabled={disabled} hover />}
        onClick={handleClick}
        disabled={disabled}
      />
    </>
  )
}

export default memo(CardBtns)
