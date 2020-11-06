import { handleActions } from 'redux-actions';

import actions from '../actions/auth';
export const name = 'auth';

const token = localStorage.getItem('access_token');
const user =
  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

const initialState = {
  token,
  isLoading: false,
  user,
  error: null
};

const reducerMap = {
  [actions.login.request]: loginRequest,
  [actions.login.success]: loginSuccess,
  [actions.login.failure]: loginFailure,

  [actions.signup.request]: signupRequest,
  [actions.signup.success]: signupSuccess,
  [actions.signup.failure]: signupFailure,

  [actions.signout.request]: signoutRequest,
  [actions.signout.success]: signoutSuccess,
  [actions.signout.failure]: signoutFailure
};

export default handleActions(reducerMap, initialState);

// Login Mutators
function loginRequest(state, { payload }) {
  return {
    ...state,
    isLoading: true,
    drawer: payload
  };
}

function loginSuccess(state, { payload }) {
  return {
    ...state,
    isLoading: false,
    user: payload.user,
    token: payload.token,
    drawer: payload
  };
}

function loginFailure(state, { payload }) {
  return {
    ...state,
    isLoading: false,
    error: payload
  };
}

// Signup Mutators
function signupRequest(state, { payload }) {
  return {
    ...state,
    isLoading: true,
    drawer: payload
  };
}

function signupSuccess(state, { payload }) {
  return {
    ...state,
    isLoading: false,
    drawer: payload
  };
}

function signupFailure(state, { payload }) {
  return {
    ...state,
    isLoading: false,
    error: payload
  };
}

// Signout Mutators
function signoutRequest(state, { payload }) {
  return {
    ...state,
    isLoading: true,
    drawer: payload
  };
}

function signoutSuccess(state, { payload }) {
  return {
    ...state,
    token: null,
    user: null,
    isLoading: true,
    drawer: payload
  };
}

function signoutFailure(state, { payload }) {
  return {
    ...state,
    isLoading: false,
    error: payload
  };
}
