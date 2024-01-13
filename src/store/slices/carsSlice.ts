import { RootState } from './../store'
import { PayloadAction, createSelector } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Car } from '../../graphql/generated'
import { filterCars } from '../../utils/filterHandlers'
import { sortCars } from '../../utils/sortHandlers'

const initialState: Car[] = []

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(_, { payload }: PayloadAction<Car[]>) {
      return payload
    },
  },
})

export const getFilteredAndSortedCars = createSelector(
  (state: RootState) => state,
  (state) => {
    const { by, field } = state.sort
    return state.cars.filter(filterCars(state.filter)).sort(sortCars(by, field))
  }
)

export const { setCars } = carsSlice.actions
export default carsSlice.reducer
