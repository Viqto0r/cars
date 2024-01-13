import { FC, memo, useCallback } from 'react'
import { toggleFavorites } from '../../../store/slices/favoritesCarsIdsSlice'
import { useAppDispatch } from '../../../store/hooks'
import { SizesType } from '../../../types/types'
import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'

interface ICardBtnsProps {
  id: number
  availability: boolean
  isFavorite: boolean
  size: SizesType
}

const CardBtns: FC<ICardBtnsProps> = ({ isFavorite, id, size }) => {
  const dispatch = useAppDispatch()
  const handleClick = useCallback(() => {
    dispatch(toggleFavorites(id))
  }, [toggleFavorites, dispatch])

  if (size === 'medium') {
    return (
      <>
        <Button size="medium" type="primary" text="Купить" />
        <Button
          size="xl-small"
          type="transparent"
          icon={<Icon type="favorites" active={isFavorite} />}
          onClick={handleClick}
        />
      </>
    )
  }

  return (
    <>
      <Button size="large" type="primary" text="Выбрать комплектацию" />
      <Button
        size="x-small"
        type="danger"
        icon={<Icon type="trash" />}
        onClick={handleClick}
      />
    </>
  )
}

export default memo(CardBtns)
