import React from 'react';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import { PATHS } from '../constants';

import Private from './private';
import Public from './public';

import HomePage from '../pages/Home';
import SignUpPage from '../pages/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Private path={PATHS.HOME} exact component={HomePage} />
      <Public path={PATHS.SIGNUP} exact component={SignUpPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
