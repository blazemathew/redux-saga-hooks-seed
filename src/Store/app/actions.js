import types from './types';

export const toggleDrawer = (name) => ({ type: types.TOGGLE_DRAWER, payload: name });

export const toggleSearch = () => ({ type: types.TOGGLE_SEARCH });

export const changeDevice = (name) => ({ type: types.CHANGE_DEVICE, payload: name });
