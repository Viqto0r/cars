import { FC, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { CARS } from '../../styles/cars.style'
import {
  fetchCars,
  addInFavorite,
  removeFromFavorite,
} from '../../store/slices/carSlice'
import { favoriteIcon } from '../../icons/icons-paths'
import { sortCars } from '../../utils/sortHandlers'
import { filterCars } from '../../utils/filterHandlers'

const Cars: FC = () => {
  const dispatch = useAppDispatch()
  const {
    allCars: cars,
    favoritesCars,
    isLoading,
    isError,
    errorMessage,
    filter,
    sort: { by, field },
  } = useAppSelector((state) => state.cars)

  useEffect(() => {
    dispatch(fetchCars())
  }, [])

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
      console.log(isFavorite)

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
    <p>Машины не найдены</p>
  )

  return (
    <div css={CARS}>
      {isLoading && <p>...loading</p>}
      {isError && <p>{errorMessage}</p>}
      {carsOutput}
    </div>
  )
}

export default Cars
