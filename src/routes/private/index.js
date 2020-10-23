import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import validateSession from '@Utils/validateSession';
import { PATHS } from '@Constants';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      validateSession()
        ? <Component {...props} />
        : <Redirect to={PATHS.SIGNUP} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
