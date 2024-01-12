import { FC, memo, useCallback } from 'react'
import { useAppDispatch } from '../../store/hooks'
import Button from '../Button/Button'
import Card from '../Card/Card'
import { CARS } from '../../styles/cars.style'
import {
  addInFavorite,
  removeFromFavorite,
  CarsState,
} from '../../store/slices/carSlice'
import { favoriteIcon } from '../../icons/icons-paths'
import { sortCars } from '../../utils/sortHandlers'
import { filterCars } from '../../utils/filterHandlers'
import { useOutletContext } from 'react-router-dom'
import Message from '../Message/Message'

const Cars: FC = () => {
  const {
    favoritesCars,
    allCars: cars,
    errorMessage,
    filter,
    isError,
    isLoading,
    sort: { by, field },
  } = useOutletContext<CarsState>()
  const dispatch = useAppDispatch()

  const handleFavoriteClick = useCallback(
    (isFavorite: boolean, id: number) => {
      if (isFavorite) {
        dispatch(removeFromFavorite(id))
        return
      }
      dispatch(addInFavorite(id))
    },
    [dispatch, removeFromFavorite, addInFavorite]
  )

  const filteredCars = cars
    .filter(filterCars(filter.toLowerCase()))
    .sort(sortCars(by, field))
    .map((car) => {
      const { description, ...props } = car
      const isFavorite = favoritesCars.includes(car)

      return (
        <Card
          key={car.id}
          {...props}
          type="medium"
          buttons={[
            <Button
              key={0}
              type="primary"
              onClick={() => {}}
              size="medium"
              text="Купить"
              disabled={!car.availability}
            />,
            <Button
              key={1}
              type="transparent"
              onClick={() => handleFavoriteClick(isFavorite, car.id)}
              size="xl-small"
              icons={favoriteIcon}
              active={isFavorite}
              disabled={!car.availability}
            />,
          ]}
        />
      )
    })
  const carsOutput = filteredCars.length ? (
    filteredCars
  ) : (
    <Message text="Машины не найдены" />
  )

  return (
    <div css={CARS}>
      {isLoading && <Message text="...загрузка" />}
      {isError && (
        <Message
          text={`Произошла ошибка: ${errorMessage}. Попробуйте еще раз`}
          isError
        />
      )}
      {carsOutput}
    </div>
  )
}

export default memo(Cars)
