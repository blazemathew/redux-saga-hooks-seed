import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './header.module.scss';
import NavTrigger from '../SideNavMobile/navTrigger';
const Header = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <nav className={classes.root}>
      <NavTrigger />
      <label className={classes.navbar_brand}>
        Some logo
      </label>
    </nav>
  );
};

export default Header;
