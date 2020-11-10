import types from './types';

const token = localStorage.getItem('access_token');
const user =
  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

const initialState = {
  token,
  isLoading: false,
  user,
  error: null
};

// strategies
const strategies = {
  [types.REQUEST_LOGIN]: loginRequest,
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGIN_ERROR]: loginFailure,

  [types.REQUEST_LOGOUT]: signoutRequest,
  [types.LOGOUT_SUCCESS]: signoutSuccess,
  [types.LOGOUT_ERROR]: signoutFailure,

  __default__: (state) => state
};

// Reducer boiler plate
export default function reducer(state = initialState, action) {
  const transformer = strategies[action.type] ? strategies[action.type] : strategies.__default__;
  return transformer(state, action);
}

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
