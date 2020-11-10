import { useCallback } from 'react';
import { useAppContext } from '../../Context/app';

export const useNavigationTrigger = () => {
  // console.log(useAppContext());
  const [{ drawer }, { toggleDrawer }] = useAppContext();

  const handleOpenNavigation = useCallback(() => {
    toggleDrawer('nav');
  }, [toggleDrawer]);

  const handleCloseNavigation = useCallback(() => {
    toggleDrawer(null);
  }, [toggleDrawer]);

  return {
    drawer,
    handleOpenNavigation,
    handleCloseNavigation
  };
};
