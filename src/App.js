import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './config/routes';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { CreateUser } from './components/CreateUser';

const App = () => {
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

export default App;
