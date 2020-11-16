import React, { useEffect, useState } from 'react';
import { usersData } from './mocks';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import routes from './config/routes';
import { Home } from './components/Home';
import { CreateUser } from './components/CreateUser';
import { EditUser } from './components/EditUser';
import {loadUsersApi} from './config/api'

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await loadUsersApi(usersData);
      setUsers(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Header />

      <Switch>
        <Route component={Home} path={routes.home} exact />
        <Route component={CreateUser} path={routes.createUser} />
        <Route component={EditUser} path={routes.editUser + ':id'} />
      </Switch>
    </>
  );
};

export default App;
