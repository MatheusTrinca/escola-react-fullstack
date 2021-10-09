import * as types from '../types';

export const clicaBotaoSuccess = () => ({
  type: types.BOTAO_CLICADO_SUCCESS,
});

export const clicaBotaoRequest = () => ({
  type: types.BOTAO_CLICADO_REQUEST,
});

export const clicaBotaoFailure = () => ({
  type: types.BOTAO_CLICADO_FAILURE,
});
