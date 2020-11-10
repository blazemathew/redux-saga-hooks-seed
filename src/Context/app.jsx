import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from 'Store/app/actions';

const AppContext = createContext();

const AppContextProvider = (props) => {
  const { actions, appState, children } = props;

  const appApi = useMemo(
    () => actions,
    [actions]
  );

  const contextValue = useMemo(() => [appState, appApi], [appApi, appState]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const mapStateToProps = ({ app }) => ({ appState: app });

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(appActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContextProvider);

export const useAppContext = () => useContext(AppContext);
