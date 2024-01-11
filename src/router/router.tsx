import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Cars from '../pages/Cars/Cars'
import Favorites from '../pages/Favorites/Favorites'
import Filter from '../components/Filter/Filter'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <>
            <Filter />
            <Cars />
          </>
        ),
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
])
