import { configureStore } from '@reduxjs/toolkit'
import carsSlice from './slices/carsSlice'
import filterSlice from './slices/filterSlice'
import favoritesCarsIdsSlice from './slices/favoritesCarsIdsSlice'
import sortSlice from './slices/sortSlice'

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    favoritesCarsIds: favoritesCarsIdsSlice,
    filter: filterSlice,
    sort: sortSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
