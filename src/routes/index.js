import React from 'react';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import { PATHS } from '@Constants';

import HomePage from '@Pages/Home';
import SignUpPage from '@Pages/SignUp';

import Private from './private';
import Public from './public';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Private path={PATHS.HOME} exact component={HomePage} />
      <Public path={PATHS.SIGNUP} exact component={SignUpPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
