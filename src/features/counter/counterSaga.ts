import { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeEvery } from 'redux-saga/effects'
import { incrementSaga, incrementSagaSuccess } from './counterSlice'

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('wait 1s')
  yield delay(1000)

  console.log('increment')
  yield put(incrementSagaSuccess(action.payload))

  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  console.log('counter saga')

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
}
