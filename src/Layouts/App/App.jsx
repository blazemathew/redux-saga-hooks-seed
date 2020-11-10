import React, { useCallback, useEffect, lazy, Suspense } from 'react';
import './App.scss';

import { HTML_UPDATE_AVAILABLE } from 'Constants/swMessageTypes';
import { registerMessageHandler } from 'Utilities/swUtils';
import Main from '../Main';
import Mask from 'Components/Mask';
import Routes from '../Router';
import { useApp } from 'Hooks/App/useApp';

const SideNavMobile = lazy(() => import('Components/SideNavMobile'));

const App = (props) => {
  const { markErrorHandled, renderError, unhandledErrors } = props;

  const handleIsOffline = useCallback(() => {}, []);

  const handleIsOnline = useCallback(() => {}, []);

  const handleHTMLUpdate = useCallback(
    async (resetHTMLUpdateAvaiableFlag) => {},
    []
  );

  const handleError = useCallback((error, id, loc, handleDismissError) => {},
  []);

  const talonProps = useApp({
    handleError,
    handleIsOffline,
    handleIsOnline,
    handleHTMLUpdate,
    markErrorHandled,
    renderError,
    unhandledErrors
  });

  const {
    isMobileNav,
    hasOverlay,
    handletoggleDrawer,
    setHTMLUpdateAvailable
  } = talonProps;

  useEffect(() => {
    const unregisterHandler = registerMessageHandler(
      HTML_UPDATE_AVAILABLE,
      () => {
        setHTMLUpdateAvailable(true);
      }
    );
    return unregisterHandler;
  }, [setHTMLUpdateAvailable]);

  if (renderError) {
    return (
      <>
        <Main isMasked={true} />
        <Mask isActive={true} />
      </>
    );
  }

  const _mobleNav = isMobileNav ? (
    <Suspense fallback={null}>
      <SideNavMobile />
    </Suspense>
  ) : null;

  return (
    <>
      <Main isMasked={hasOverlay}>
        <Routes />
      </Main>
      <Mask isActive={hasOverlay} dismiss={handletoggleDrawer} />
      {_mobleNav}
    </>
  );
};

export default App;
