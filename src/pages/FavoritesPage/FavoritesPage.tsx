import { FC, memo } from 'react'
import {
  FAVORITES_LIST,
  FAVORITES_TITLE,
  FAFORITES,
} from '../../styles/favorites.style'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { deleteIcon } from '../../icons/icons-paths'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getEnding } from '../../utils/stringFunctions'
import { removeFromFavorite } from '../../store/slices/carSlice'

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => {
  const { favoritesCars } = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()

  const outputCars = favoritesCars.map((car) => (
    <Card
      key={car.id}
      {...car}
      type="large"
      buttons={[
        <Button
          key={0}
          type="primary"
          onClick={() => console.log('Купить')}
          size="medium"
          text="Купить"
        />,
        <Button
          key={1}
          type="danger"
          onClick={() => dispatch(removeFromFavorite(car.id))}
          size="small"
          icons={deleteIcon}
        />,
      ]}
    />
  ))
  const outputTitle = `Избранные товары — ${outputCars.length} позиц${getEnding(
    outputCars.length,
    ['ия', 'uu', 'ий']
  )}`

  return (
    <div css={FAFORITES}>
      <h2 css={FAVORITES_TITLE}>{outputTitle} </h2>
      <div css={FAVORITES_LIST}>{outputCars}</div>
    </div>
  )
}

export default memo(Favorites)
