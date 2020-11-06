import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './notification.module.scss';
import { useNotification } from 'Hooks/Header/useNotification';

const ITEM = Array.from({ length: 2 }).fill(null);
const Notification = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const { containerRef, handleClick, isOpen } = useNotification();

  const _child_items = ITEM.map((item, key) => (
    <a className={classes.dropdown_item} href="#!" key={key} data-null={item}>
      <div
        className={`${classes.dropdown_notifications_item_icon} ${classes.bg_success}`}
      >
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
          className="feather feather-activity"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>
      <div className={classes.dropdown_notifications_item_content}>
        <div className={classes.dropdown_notifications_item_content_details}>
          December 29, 2019
        </div>
        <div className={classes.dropdown_notifications_item_content_text}>
          This is an alert message. It's nothing serious, but it requires your
          attention.
        </div>
      </div>
    </a>
  ));

  const _child = isOpen ? (
    <div className={classes.navbar_expand}>
      <h6 className={classes.dropdown_header}>
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
          className="feather feather-bell mr-2"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        Alerts Center
      </h6>
      {_child_items}
      <a className={classes.dropdown_item_footer} href="#!">
        View All Alerts
      </a>
    </div>
  ) : null;
  return (
    <li className={`${classes.nav_item} mr-3`} ref={containerRef}>
      <button
        className={`${classes.btn_dropdown} btn ${classes.btn_icon} `}
        onClick={handleClick}
      >
        <span>2</span>
        <svg
          height="512px"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1   c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z" />
            <path d="M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z" />
          </g>
        </svg>
      </button>
      {_child}
    </li>
  );
};

export default Notification;
