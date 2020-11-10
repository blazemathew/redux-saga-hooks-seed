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
