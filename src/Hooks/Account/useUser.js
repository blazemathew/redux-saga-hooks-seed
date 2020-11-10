import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from 'Store/auth/actions';

const useUser = () => {
  const { user, token } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();
  const { RequestLogout } = bindActionCreators(authActions, dispatch);

  return { user, RequestLogout, token };
};

export default useUser;
