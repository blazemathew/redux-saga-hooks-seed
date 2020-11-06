import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('access_token');

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/mycdo', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
