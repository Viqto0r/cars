import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: number[] = []

export const favoritesCarsIds = createSlice({
  name: 'favoritesCarsIds',
  initialState,
  reducers: {
    toggleFavorites(state, { payload }: PayloadAction<number>) {
      if (state.includes(payload)) {
        return state.filter((id) => id !== payload)
      } else {
        state.push(payload)
      }
    },
  },
})

export const getFavoritesCars = createSelector(
  (state: RootState) => state,
  (state: RootState) => {
    return state.cars.filter((car) => state.favoritesCarsIds.includes(car.id))
  }
)

export const isFavoriteBtnActive = (state: RootState) =>
  state.favoritesCarsIds.length > 0

export const { toggleFavorites } = favoritesCarsIds.actions
export default favoritesCarsIds.reducer
