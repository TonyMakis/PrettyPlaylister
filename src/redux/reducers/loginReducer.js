import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';

export const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
  error: ''
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.loginData.access_token,
        refreshToken: action.loginData.refresh_token,
        error: action.loginData.error,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: '',
        refreshToken: '',
        error: '',
      }
    default:
        return state;
  }
};
