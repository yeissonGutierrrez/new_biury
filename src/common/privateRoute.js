import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

export default PrivateRoute;
