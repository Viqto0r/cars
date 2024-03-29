import { FC, memo, useCallback } from 'react'
import Filter from '../../components/Filter/Filter'
import List from '../../components/List/List'
import Card from '../../components/Card/Card'
import { getFilteredAndSortedCars } from '../../store/slices/carsSlice'
import { useAppSelector } from '../../store/hooks'
import { CONTAINER } from '../../styles/container.styles'

const CarsPage: FC = () => {
  const cars = useAppSelector(getFilteredAndSortedCars)
  const favoritesCarsIds = useAppSelector((state) => state.favoritesCarsIds)

  const renderCars = useCallback(() => {
    return cars.map((car) => {
      const isFavorite = favoritesCarsIds.includes(car.id)
      const { description, ...props } = car
      return (
        <Card key={car.id} {...props} size="medium" isFavorite={isFavorite} />
      )
    })
  }, [cars, favoritesCarsIds])

  return (
    <div css={CONTAINER}>
      <Filter />
      <List type="grid" items={renderCars} />
    </div>
  )
}

export default memo(CarsPage)
