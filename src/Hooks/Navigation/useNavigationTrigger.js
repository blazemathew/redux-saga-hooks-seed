import { useCallback } from 'react';
import { useAppContext } from '../../Context/app';

export const useNavigationTrigger = () => {
  // console.log(useAppContext());
  const [{ drawer }, { toggleDrawer, closeDrawer }] = useAppContext();

  const handleOpenNavigation = useCallback(() => {
    toggleDrawer('nav');
  }, [toggleDrawer]);

  const handleCloseNavigation = useCallback(() => {
    closeDrawer(null);
  }, [closeDrawer]);

  return {
    drawer,
    handleOpenNavigation,
    handleCloseNavigation
  };
};
