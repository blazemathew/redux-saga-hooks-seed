import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './sideNav.module.scss';
const SideNav = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <nav className={classes.root}>
      <div className={classes.sidenav_menu}>
        <div className={classes.nav_accordion}>
          some sideNav
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
