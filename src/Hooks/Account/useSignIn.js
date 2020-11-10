import { useCallback, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as authActions from 'Store/auth/actions';

export const useSignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formApiRef = useRef(null);
  const setFormApi = useCallback((api) => (formApiRef.current = api), []);

  const { RequestLogin } = bindActionCreators(authActions, dispatch);
  const { isLoading, error } = useSelector(({ auth }) => auth);

  // This doesn't need useCallback according to my understanding from this blog
  // https://dmitripavlutin.com/dont-overuse-react-usecallback/
  const handleSubmit = ({ email, password }) => {
    RequestLogin({ email, password }, history);
  };

  return {
    handleSubmit,
    error,
    isBusy: isLoading,
    setFormApi
  };
};
