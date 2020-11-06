import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './header.module.scss';
import SearchBar from '../SearchBar';
import ProfileDropdown from './profileDropdown';
import NotificationDropdown from './notification';
const Header = (props) => {
  const { user, isAuthenticated, Signout } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <nav className={classes.root}>
      <label className={classes.navbar_brand}>
        some icon
      </label>
      {isAuthenticated && (
        <>
          <SearchBar />

          <ul className={classes.navbar_nav}>
            <NotificationDropdown />
            <ProfileDropdown user={user} Signout={Signout} />
          </ul>
        </>
      )}
    </nav>
  );
};

export default Header;
