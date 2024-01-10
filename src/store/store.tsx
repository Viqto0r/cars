import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import carsSlice from './slices/carSlice'

export const store = configureStore({
  reducer: {
    cars: carsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//export type AppThunk<ReturnType = void> = ThunkAction<
//  ReturnType,
//  RootState,
//  unknown,
//  Action<string>
//>
