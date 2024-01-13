import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setFilter(_, { payload }: PayloadAction<string>) {
      return payload
    },
  },
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
