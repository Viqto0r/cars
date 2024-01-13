import { FC, memo, useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from './store/hooks'
import Message from './components/Message/Message'
import Header from './components/Header/Header'
import Spinner from './components/Spinner/Spinner'
import { AppStateType } from './types/types'
import { setCars } from './store/slices/carsSlice'
import { fetchCars } from './api/helpers'
import { APP } from './styles/app.styles'
import { GLOBAL_STYLES } from './styles/global.styles'
import './fonts/fonts.css'

const App: FC = () => {
  const [state, setState] = useState<AppStateType>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        setState('pending')
        const cars = await fetchCars()
        dispatch(setCars(cars))
        setState('fullfield')
      } catch (e) {
        setState('error')
      }
    })()
  }, [])

  if (state === 'pending') {
    return <Spinner fullscreen />
  }

  if (state === 'error') {
    return <Message isError text="Нет ответа от сервера, попробуйте позже." />
  }

  return (
    <div css={APP}>
      <Header />
      <Outlet />
      <Global styles={GLOBAL_STYLES} />
    </div>
  )
}

export default memo(App)
