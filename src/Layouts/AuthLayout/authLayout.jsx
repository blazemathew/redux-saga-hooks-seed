import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './authLayout.module.scss';

import Header from 'Components/Header';

const AuthLayout = (props) => {
  const { children } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <>
      <Header />
      <div>
        <div className={`${classes.container} p-4`}>{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
