import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  botaoClicado: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO':
      console.log('Listening BOTAO_CLICADO');
      return {
        ...state,
        botaoClicado: !state.botaoClicado,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
