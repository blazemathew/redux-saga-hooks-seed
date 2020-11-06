import { useSelector, useDispatch } from 'react-redux';

import bindActionCreators from 'Utilities/bindActionCreators';
import * as asyncActions from 'Store/actions/auth/asyncActions';

const useUser = () => {
  const { user, token } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();
  const { Signout } = bindActionCreators(asyncActions, dispatch);

  return { user, Signout, token };
};

export default useUser;
