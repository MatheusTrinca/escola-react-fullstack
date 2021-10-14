import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );
  return persistedReducers;
};

export default reducers;
