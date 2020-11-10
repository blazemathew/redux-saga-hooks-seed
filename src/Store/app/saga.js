import { takeLatest, put } from 'redux-saga/effects';

import types from './types';

function* toggleDrawer(name) {
  yield put({ type: types.TOGGLE_DRAWER, payload: name});
}

function* toggleSearch() {
  yield put({ type: types.TOGGLE_SEARCH });
}

function* changeDevice(name) {
  yield put({ type: types.CHANGE_DEVICE, payload: name});
}

export default function* authSaga() {
  yield takeLatest(types.TOGGLE_DRAWER, toggleDrawer);
  yield takeLatest(types.TOGGLE_SEARCH, toggleSearch);
  yield takeLatest(types.CHANGE_DEVICE, changeDevice);
}
