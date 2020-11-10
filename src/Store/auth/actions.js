import types from './types';

export const RequestLogin = (payload) => ({
  type: types.REQUEST_LOGIN,
  payload
});

export const LoginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user
});

// Logout
export const RequestLogout = () => ({
  type: types.REQUEST_LOGOUT
});
