import { createActions } from 'redux-actions';

const prefix = 'AUTH';
const actionTypes = ['SET_TOKEN'];

const actionMap = {
  LOGIN: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  },
  SIGNUP: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  },
  SIGNOUT: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  }
};

export default createActions(actionMap, ...actionTypes, { prefix });
