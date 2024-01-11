import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage'
import CarsPage from '../pages/CarsPage/CarsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <CarsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
    ],
  },
])
