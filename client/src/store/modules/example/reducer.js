import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:
      return {
        ...state,
        botaoClicado: !state.botaoClicado,
      };
    case types.BOTAO_CLICADO_REQUEST:
      console.log('Estou fazendo a requisição');
      return {
        ...state,
      };
    case types.BOTAO_CLICADO_FAILURE:
      console.log('Deu ERRO');
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
