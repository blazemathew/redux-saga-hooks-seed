import React from 'react';
import { useHistory } from 'react-router-dom';

import { mergeClasses } from 'classify';
import defaultClasses from './profileDropdown.module.scss';
import { useProfileDropdown } from 'Hooks/Header/useProfileDropdown';

const ProfileDropdown = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const { user, Signout } = props;
  const history = useHistory();

  const { containerRef, handleClick, isOpen } = useProfileDropdown();

  const logout = async () => {
    await Signout();
    history.push('/');
  };

  const _dropdown = isOpen ? (
    <div className={classes.navbar_expand}>
      <h6 className={`${classes.dropdown_header} d-flex align-items-center`}>
        <img
          className={classes.dropdown_user_img}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd8%2FAntu_system-switch-user.svg%2F768px-Antu_system-switch-user.svg.png&f=1&nofb=1"
          alt="profile"
        />
        <div className={classes.dropdown_user_details}>
          <div className={classes.dropdown_user_details_name}>
            {user.username}
          </div>
          <div className="dropdown-user-details-email">{user.email}</div>
        </div>
      </h6>
      <div className={classes.dropdown_divider}></div>
      <a className={classes.dropdown_item} href="#!">
        <div className={classes.dropdown_item_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-settings"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
        Account
      </a>
      <a className={classes.dropdown_item} href="#!" onClick={logout}>
        <div className={classes.dropdown_item_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>
        Logout
      </a>
    </div>
  ) : null;

  return (
    <li
      className="nav-item dropdown no-caret mr-2 dropdown-user"
      ref={containerRef}
    >
      <button
        className={`${classes.btn_dropdown} btn ${classes.btn_icon} `}
        onClick={handleClick}
      >
        <img
          className={classes.img_fluid}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd8%2FAntu_system-switch-user.svg%2F768px-Antu_system-switch-user.svg.png&f=1&nofb=1"
          alt="profile"
        />
        <span>{user.username}</span>
      </button>
      {_dropdown}
    </li>
  );
};

export default ProfileDropdown;
