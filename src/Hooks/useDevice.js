import { useAppContext } from '../Context/app';

export const useDevice = () => {
  const [appState, appApi] = useAppContext();
  const { closeDrawer } = appApi;
  const { hasBeenOffline, isOnline, whichDeviceActive } = appState;

  return {
    isOnline,
    hasBeenOffline,
    closeDrawer,
    whichDeviceActive
  };
};
