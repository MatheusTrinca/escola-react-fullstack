import { all } from 'redux-saga/effects';

import example from './example/sagas';

export default function* rootStaga() {
  return yield all([example]);
}
