import { FC, memo, useCallback } from 'react'
import Card from '../../components/Card/Card'
import List from '../../components/List/List'
import { useAppSelector } from '../../store/hooks'
import { getEnding } from '../../utils/stringFunctions'
import { getFavoritesCars } from '../../store/slices/favoritesCarsIdsSlice'
import { FAFORITES_TITLE } from '../../styles/favorites.styles'
import { CONTAINER } from '../../styles/container.styles'

const FavoritesPage: FC = () => {
  const favoritesCars = useAppSelector(getFavoritesCars)

  const outputTitle = `Избранные товары — ${
    favoritesCars.length
  } позиц${getEnding(favoritesCars.length, ['ия', 'uu', 'ий'])}`

  const renderCars = useCallback(() => {
    return favoritesCars.map((car) => (
      <Card key={car.id} {...car} size="large" />
    ))
  }, [favoritesCars])

  return (
    <div css={CONTAINER}>
      <h2 css={FAFORITES_TITLE}>{outputTitle} </h2>
      <List type="column" items={renderCars} />
    </div>
  )
}

export default memo(FavoritesPage)
