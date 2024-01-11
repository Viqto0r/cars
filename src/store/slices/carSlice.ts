import { query } from './../../api/host'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Car } from '../../graphql/generated'
import { HOST } from '../../api/host'
import { Sort } from '../../types/types'

interface IResponse {
  data: { cars: Car[] }
}

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch(`${HOST}/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })
  const {
    data: { cars },
  }: IResponse = await response.json()

  return cars
})

export interface CarsState {
  data: Car[]
  isLoading: boolean
  isError: boolean
  errorMessage: string
  filter: string
  sort: Sort
}

const initialState: CarsState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
  filter: '',
  sort: {
    by: 'more',
    field: 'model_year',
    id: '0',
  },
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter(state, { payload }: PayloadAction<string>) {
      state.filter = payload
    },
    setSort(state, { payload }: PayloadAction<Sort>) {
      state.sort = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCars.pending, (state) => {
      state.isLoading = true
      state.isError = false
      state.errorMessage = ''
    })

    builder.addCase(fetchCars.rejected, (state, { error }) => {
      state.isError = true
      state.isLoading = false
      state.errorMessage = error.message || ''
    })

    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.data = payload
      state.isLoading = false
    })
  },
})

export const { setFilter, setSort } = carsSlice.actions
export default carsSlice.reducer
