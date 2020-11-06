import { useCallback } from 'react';
import { useAppContext } from '../../Context/app';

export const useNavigation = () => {
  // retrieve app state from context
  const [appState, { closeDrawer }] = useAppContext();

  const { drawer } = appState;
  const isOpen = drawer === 'nav';

  const handleClose = useCallback(() => {
    closeDrawer();
  }, [closeDrawer]);

  return {
    handleClose,
    isOpen
  };
};
