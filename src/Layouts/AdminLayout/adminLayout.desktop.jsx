import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './adminLayoutDesktop.module.scss';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import SideNav from 'Components/SideNav';

import useUser from 'Hooks/Account/useUser';

const AdminLayout = (props) => {
  const { children } = props;
  const classes = mergeClasses(defaultClasses, props.classes);
  const { Signout, user } = useUser();

  return (
    <>
      <Header user={user} Signout={Signout} isAuthenticated={true} />
      <div className={classes.layoutSidenav}>
        <div className={classes.layoutSidenav_nav}>
          <SideNav />
        </div>
        <div className={classes.layoutSidenav_content}>
          <div className={`${classes.container} p-4`}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
