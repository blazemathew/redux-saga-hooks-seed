import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './main.module.scss';
import { useScrollLock } from 'Hooks/useScrollLock';

import useUser from 'Hooks/Account/useUser';

import AuthLayout from 'Layouts/AuthLayout';
import AdminLayout from 'Layouts/AdminLayout';

const Main = (props) => {
  const { children, isMasked } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  const rootClass = isMasked ? classes.root_masked : classes.root;
  const pageClass = isMasked ? classes.page_masked : classes.page;

  const { token } = useUser();

  useScrollLock(isMasked);

  const Layout = token ? AdminLayout : AuthLayout;

  return (
    <main className={rootClass}>
      <div className={pageClass}>
        <Layout>{children}</Layout>
      </div>
    </main>
  );
};

export default Main;
