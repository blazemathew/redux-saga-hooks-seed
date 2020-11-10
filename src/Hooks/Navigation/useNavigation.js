import { useCallback } from 'react';
import { useAppContext } from '../../Context/app';

export const useNavigation = () => {
  // retrieve app state from context
  const [appState, { toggleDrawer }] = useAppContext();

  const { drawer } = appState;
  const isOpen = drawer === 'nav';

  const handleClose = useCallback(() => {
    toggleDrawer();
  }, [toggleDrawer]);

  return {
    handleClose,
    isOpen
  };
};
