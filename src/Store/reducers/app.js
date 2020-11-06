import { handleActions } from 'redux-actions';

import actions from '../actions/app';
import {
  getCurrentDevice,
} from '../../Utilities/deviceInfo';
export const name = 'app';
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

const reducerMap = {
  [actions.toggleDrawer]: (state, { payload }) => ({
    ...state,
    drawer: payload,
    overlay: !!payload
  }),
  [actions.toggleSearch]: (state) => ({
    ...state,
    searchOpen: !state.searchOpen
  }),
  [actions.setOnline]: (state) => ({
    ...state,
    isOnline: true
  }),
  [actions.setOffline]: (state) => ({
    ...state,
    isOnline: false,
    hasBeenOffline: true
  }),
  [actions.changeDevice]: (state, { payload }) => ({
    ...state,
    whichDeviceActive: payload
  })
};

export default handleActions(reducerMap, initialState);
