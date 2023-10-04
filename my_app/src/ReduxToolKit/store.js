import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../ReduxToolKit/CounterSlice'
export const store = configureStore({
  reducer: CounterReducer
})
