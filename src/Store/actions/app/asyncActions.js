import actions from './actions';

export const toggleDrawer = (name) => async (dispatch) =>
  dispatch(actions.toggleDrawer(name));

export const closeDrawer = () => async (dispatch) =>
  dispatch(actions.toggleDrawer(null));

export const toggleSearch = () => async (dispatch) =>
  dispatch(actions.toggleSearch());

export const changeDevice = (name) => async (dispatch) =>
  dispatch(actions.changeDevice(name));

export const Login = () =>
  async function thunk(dispatch) {
    //
    await dispatch(actions.login.request());
    await dispatch(actions.login.success());
    await dispatch(actions.login.falilure());
  };
