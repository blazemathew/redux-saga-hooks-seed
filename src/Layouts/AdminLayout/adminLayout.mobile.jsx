import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './adminLayoutMobile.module.scss';
import Header from 'Components/HeaderMobile';
import Footer from 'Components/Footer';

const AdminLayout = (props) => {
  const { children } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <>
      <Header />
      <div className={classes.layoutSidenav}>
        <div className={classes.layoutSidenav_content}>
          <div className={`${classes.container} p-4`}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
