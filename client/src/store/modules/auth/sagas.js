import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';
import axios from '../../../config/axios';
import { get } from 'lodash';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Você fez login');

    console.log(response.data);

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    payload.history.push(payload.prevPath);
  } catch (err) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  // setIsLoading(true);
  // try {
  //   await axios.post('/users', {
  //     nome,
  //     email,
  //     password,
  //   });
  //   toast.success('Você fez o seu cadastro');
  //   setIsLoading(false);
  //   history.push('/login');
  // } catch (err) {
  //   const errors = get(err, 'response.data.errors', []);
  //   setIsLoading(false);
  //   errors.forEach(error => toast.error(error));
  // }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
