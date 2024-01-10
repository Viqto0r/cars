import { FC } from 'react'
import { Global } from '@emotion/react'
import Cars from './pages/Cars/Cars'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Favorites from './pages/Favorites/Favorites'
import { APP } from './styles/app.style'
import { GLOBAL_STYLES } from './styles/global.styles'
import './fonts/fonts.css'

const App: FC = () => {
  return (
    <div css={APP}>
      <Header />
      <Filter />
      <Cars />
      <Favorites count={5} />
      <Global styles={GLOBAL_STYLES} />
    </div>
  )
}

export default App
