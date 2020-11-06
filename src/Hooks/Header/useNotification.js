import { useCallback } from 'react';
import { useDropdown } from '../useDropdown';

export const useNotification = () => {
  const { elementRef, expanded, setExpanded } = useDropdown();

  const handleClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  return {
    containerRef: elementRef,
    handleClick,
    isOpen: expanded
  };
};
