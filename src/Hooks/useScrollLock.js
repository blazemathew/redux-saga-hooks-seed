import { useLayoutEffect } from 'react';

/**
 * @kind function
 *
 * @param {Boolean} locked Whether scrolling should be locked.
 */
export const useScrollLock = (locked) => {
  useLayoutEffect(() => {
    document.documentElement.dataset.scrollLock = locked || '';
  }, [locked]);
};
