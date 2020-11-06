import { createActions } from 'redux-actions';

const prefix = 'APP';
const actionTypes = [
  'TOGGLE_DRAWER',
  'SET_ONLINE',
  'SET_OFFLINE',
  'TOGGLE_SEARCH',
  'MARK_ERROR_HANDLED',
  'CHANGE_DEVICE'
];

export default createActions(...actionTypes, { prefix });
