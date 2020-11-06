import React, { Suspense, lazy, memo } from 'react';
import { Switch } from 'react-router-dom';

import { fullPageLoadingIndicator } from 'Components/LoadingIndicator';

import { PrivateRoute } from './privateRoutes';
import { PublicRoute } from './publicRoutes';

const LoginPage = lazy(() => import('Pages/SignIn'));
const SignUpPage = lazy(() => import('Pages/SignUp'));
const ForgotPassword = lazy(() => import('Pages/ForgotPassword'));
const Dashboard = lazy(() => import('Pages/Dashboard'));

// TODO: Make a file for keeping route variables
const Routes = () => (
  <Suspense fallback={fullPageLoadingIndicator}>
    <Switch>
      <PublicRoute exact path="/" component={LoginPage} />
      <PublicRoute exact path="/sign_up" component={SignUpPage} />
      <PublicRoute exact path="/forgot_password" component={ForgotPassword} />

      <PrivateRoute exact path="/mycdo" component={Dashboard} />
    </Switch>
  </Suspense>
);

export default memo(Routes);
