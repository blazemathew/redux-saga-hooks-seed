import React from 'react';

import { mergeClasses } from '../../classify';
import defaultClasses from './nav.module.scss';
import { useNavigation } from '../../Hooks/Navigation/useNavigation';
import SideNav from '../SideNav';
const SideNavMobile = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const { isOpen } = useNavigation();
  const rootClassName = isOpen ? classes.root_open : classes.root;

  return (
    <div className={rootClassName}>
      <SideNav />
    </div>
  );
};

export default SideNavMobile;
