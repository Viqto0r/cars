import { FC, useEffect } from 'react'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { CARS } from '../../styles/cars.style'
import { favoriteIcon } from '../../icons/icons-paths'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchCars } from '../../store/slices/carSlice'
import { Car } from '../../graphql/generated'

const filterCars = (filter: string) => (car: Car) => {
  const lowerFilter = filter.toLowerCase()
  return (
    car.model.toLowerCase().includes(lowerFilter) ||
    car.brand.toLowerCase().includes(lowerFilter)
  )
}

const Cars: FC = () => {
  const dispatch = useAppDispatch()
  const {
    data: cars,
    isLoading,
    isError,
    errorMessage,
    filter,
  } = useAppSelector((state) => state.cars)

  useEffect(() => {
    dispatch(fetchCars())
  }, [])

  const filteredCars = cars.filter(filterCars(filter)).map((car) => {
    const { description, ...props } = car
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
          />,
          <Button
            key={1}
            type="transparent"
            onClick={() => {}}
            size="xl-small"
            icons={favoriteIcon}
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
