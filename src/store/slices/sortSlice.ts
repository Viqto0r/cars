import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISort } from '../../types/types'

const initialState: ISort = {
  by: 'asc',
  field: 'availability',
  id: '0',
}

export const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {
    setSort(_, { payload }: PayloadAction<ISort>) {
      return payload
    },
  },
})

export const { setSort } = sortSlice.actions
export default sortSlice.reducer
