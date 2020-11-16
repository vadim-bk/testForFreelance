import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../config/routes';

import { Header } from '../Header';
import { Home } from '../Home';
import { CreateUser } from '../CreateUser';

export const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route component={Home} path={routes.home} exact />
        <Route component={CreateUser} path={routes.createUser} />
        <Route component={CreateUser} path={routes.editUser + ':id'} />
      </Switch>
    </>
  );
};
