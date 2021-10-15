import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
