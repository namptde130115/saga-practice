import { all } from 'redux-saga/effects'
import counterSaga from '../features/counter/counterSaga'

//khai bao rootSaga
export default function* () {
  console.log('root saga')
  yield all([counterSaga()])
}
