import * as types from '../types';

export const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginRequest = payload => ({
  type: types.LOGIN_REQUEST,
  payload,
});

export const loginFailure = payload => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const registerRequest = payload => ({
  type: types.REGISTER_REQUEST,
  payload,
});
