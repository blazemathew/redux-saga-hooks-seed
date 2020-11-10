import { call, takeLatest, put } from 'redux-saga/effects';

import types from './types';
import { login, logout } from 'Services/authServices';

function* SignIn({ payload }, history) {
  console.log(history);
  try {
    const response = yield call(login, payload);
    // dispatch a success action to the store with logged in response
    yield put({ type: types.LOGIN_SUCCESS, payload: response });
  } catch (error) {
    // dispatch an error action to the store with logged in response
    yield put({
      type: types.LOGIN_ERROR,
      payload: { message: error.message }
    });
  }
}

function* SignOut() {
  try {
    yield call(logout);
    localStorage.clear();
    yield put({ type: types.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: types.LOGOUT_ERROR, payload: error });
  }
}

export default function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, SignIn);
  yield takeLatest(types.REQUEST_LOGOUT, SignOut);
}
