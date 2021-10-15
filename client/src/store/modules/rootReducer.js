import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  example: exampleReducer,
  auth: authReducer,
});
