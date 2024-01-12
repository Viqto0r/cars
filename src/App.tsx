import { FC, memo, useEffect } from 'react'
import { Global } from '@emotion/react'
import Header from './components/Header/Header'
import { APP } from './styles/app.style'
import { GLOBAL_STYLES } from './styles/global.styles'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './store/hooks'
import './fonts/fonts.css'
import { fetchCars } from './store/slices/carSlice'

const App: FC = () => {
  const cars = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCars())
  }, [])

  return (
    <div css={APP}>
      <Header active={cars.favoritesCars.length > 0} />
      <Outlet context={cars} />
      <Global styles={GLOBAL_STYLES} />
    </div>
  )
}

export default memo(App)
