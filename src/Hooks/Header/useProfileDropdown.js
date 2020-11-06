import { useCallback } from 'react';
import { useDropdown } from 'Hooks/useDropdown';

//const dismissers = new WeakMap();

// Memoize dismisser funcs to reduce re-renders from func identity change.
// const getErrorDismisser = (error, onDismissError) => {
//     return dismissers.has(error)
//         ? dismissers.get(error)
//         : dismissers.set(error, () => onDismissError(error)).get(error);
// };

export const useProfileDropdown = () => {
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
