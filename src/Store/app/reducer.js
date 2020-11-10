import types from './types';
import { getCurrentDevice } from 'Utilities/deviceInfo';

const activeDevice = getCurrentDevice();
const initialState = {
  drawer: null,
  hasBeenOffline: !navigator.onLine,
  isOnline: navigator.onLine,
  overlay: false,
  searchOpen: true,
  query: '',
  pending: {},
  whichDeviceActive: activeDevice
};

const strategies = {
  [types.TOGGLE_DRAWER]: toggleDrawer,
  [types.TOGGLE_SEARCH]: toggleSearch,
  [types.SET_ONLINE]: setOnline,
  [types.SET_OFFLINE]: setOffline,
  [types.CHANGE_DEVICE]: changeDevice,

  __default__: (state) => state
};

// Reducer boiler plate
export default function reducer(state = initialState, action) {
  const transformer = strategies[action.type]
    ? strategies[action.type]
    : strategies.__default__;
  return transformer(state, action);
}

function toggleDrawer(state, { payload }) {
  return {
    ...state,
    drawer: payload,
    overlay: !!payload
  };
}

function toggleSearch(state) {
  return {
    ...state,
    searchOpen: !state.searchOpen
  };
}

function setOnline(state) {
  return {
    ...state,
    isOnline: true
  };
}

function setOffline(state) {
  return {
    ...state,
    isOnline: false,
    hasBeenOffline: true
  };
}

function changeDevice(state, { payload }) {
  return {
    ...state,
    whichDeviceActive: payload
  };
}
