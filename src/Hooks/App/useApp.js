import { useCallback, useEffect, useMemo, useState } from 'react';
import errorRecord from 'Utilities/createErrorRecord';
import { useAppContext } from 'Context/app';
import { DESKTOP } from 'Constants/deviceTypes';
import { useWindowSize } from 'Context/useWindowSize';
import { getCurrentDevice } from 'Utilities/deviceInfo';

export const useApp = (props) => {
  const {
    handleError,
    handleIsOffline,
    handleIsOnline,
    handleHTMLUpdate,
    markErrorHandled,
    renderError,
    unhandledErrors
  } = props;

  const [isHTMLUpdateAvailable, setHTMLUpdateAvailable] = useState(false);

  const resetHTMLUpdateAvaialable = useCallback(
    () => setHTMLUpdateAvailable(false),
    [setHTMLUpdateAvailable]
  );
  const windowSize = useWindowSize();

  const reload = useCallback(
    process.env.NODE_ENV === 'development'
      ? () => {
        console.log(
          'Default window.location.reload() error handler not running in developer mode.'
        );
      }
      : () => {
        window.location.reload();
      },
    []
  );

  const renderErrors = useMemo(
    () =>
      renderError
        ? [errorRecord(renderError, window, useApp, renderError.stack)]
        : [],
    [renderError]
  );

  const errors = renderError ? renderErrors : unhandledErrors;
  const handleDismissError = renderError ? reload : markErrorHandled;

  // Only add toasts for errors if the errors list changes. Since `addToast`
  // and `toasts` changes each render we cannot add it as an effect dependency
  // otherwise we infinitely loop.
  useEffect(() => {
    //for (const { error, id, loc } of errors) {
    // handleError(
    //     error,
    //     id,
    //     loc,
    //     getErrorDismisser(error, handleDismissError)
    // );
    //}
  }, [errors, handleDismissError, handleError]);

  const [appState, appApi] = useAppContext();
  console.log(appApi);
  const { toggleDrawer, changeDevice } = appApi;
  const { hasBeenOffline, isOnline, overlay, whichDeviceActive } = appState;

  useEffect(() => {
    const device = getCurrentDevice();
    //console.log(device);
    changeDevice(device);
  }, [windowSize, changeDevice]);

  useEffect(() => {
    if (hasBeenOffline) {
      if (isOnline) {
        handleIsOnline();
      } else {
        handleIsOffline();
      }
    }
  }, [handleIsOnline, handleIsOffline, hasBeenOffline, isOnline]);

  useEffect(() => {
    if (isHTMLUpdateAvailable) {
      handleHTMLUpdate(resetHTMLUpdateAvaialable);
    }
  }, [isHTMLUpdateAvailable, handleHTMLUpdate, resetHTMLUpdateAvaialable]);

  const handletoggleDrawer = useCallback(() => {
    toggleDrawer();
  }, [toggleDrawer]);

  return {
    isMobileNav: whichDeviceActive !== DESKTOP,
    hasOverlay: !!overlay,
    handletoggleDrawer,
    setHTMLUpdateAvailable
  };
};
