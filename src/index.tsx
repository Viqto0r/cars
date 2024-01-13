import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store/store'
import App from './App'
import CarsPage from './pages/CarsPage/CarsPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

const rootNodeId = 'root'

const container = document.getElementById(rootNodeId)

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `)
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />}>
            <Route index element={<CarsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
