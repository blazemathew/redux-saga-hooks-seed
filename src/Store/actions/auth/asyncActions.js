import actions from './actions';
import { login, logout } from 'Services/authServices';

export const Login = (payload) =>
  async function thunk(dispatch) {
    try {
      dispatch(actions.login.request(payload));
      const response = await login(payload);

      dispatch(actions.login.success(response));
    } catch (error) {
      await dispatch(actions.login.failure(error));
    }
  };

export const Signout = (payload) =>
  async function thunk(dispatch) {
    try {
      await dispatch(actions.signout.request());
      await logout();
      localStorage.clear();
      await dispatch(actions.signout.success());
    } catch (error) {
      await dispatch(actions.signout.failure(error));
    }
  };
