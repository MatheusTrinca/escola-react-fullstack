import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootStaga() {
  return yield all([auth]);
}
