import { useAppContext } from '../Context/app';

export const useDevice = () => {
  const [appState, appApi] = useAppContext();
  const { toggleDrawer } = appApi;
  const { hasBeenOffline, isOnline, whichDeviceActive } = appState;

  return {
    isOnline,
    hasBeenOffline,
    toggleDrawer,
    whichDeviceActive
  };
};
