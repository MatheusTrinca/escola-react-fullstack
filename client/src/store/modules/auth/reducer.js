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
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...initialState,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
