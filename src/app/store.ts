import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'

const middlewareSaga = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },

  // khai bao saga middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareSaga)
})

middlewareSaga.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
